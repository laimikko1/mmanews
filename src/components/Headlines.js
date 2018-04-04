import React from 'react'
import { connect } from 'react-redux'
import HeadlineThumbnail from '../components/HeadlineThumbnail'

class Headlines extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: ''
        }
    }

    render() {
        return (
            <ul>
                {this.props.headlines.map(headline =>
                    <HeadlineThumbnail
                        key={headline.id}
                        headline={headline}
                    />
                )}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        headlines: state.headlines
    }
}

export default connect(
    mapStateToProps,
    null
)(Headlines)