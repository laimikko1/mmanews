import React from 'react'
import { connect } from 'react-redux'
import { initializeEvents } from '../reducers/eventReducer'

class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: ''
        }
    }

    async componentDidMount() {
        await this.props.initializeEvents()
    }

    renderModal = (headline) => {
        return () => {
            this.setState({ modal: headline })
        }
    }

    render() {
        return (
            <div>moi</div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}


