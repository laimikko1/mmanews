import React from 'react'
import { connect } from 'react-redux'
import { initializeTitleHolders } from '../../reducers/fighterReducer'
import { List, Image, Grid } from 'semantic-ui-react'

class FightersPageTitleHolders extends React.Component {

    async componentWillMount() {
        await this.props.initializeTitleHolders()
        console.log(this.getTitleHolders('Men'))
        console.log(this.getTitleHolders('Women'))
    }

    getMen = (gender) => {
        let temp = []
        this.props.fighters.forEach(f => {
            if (!f.weight_class.includes("Women")) {
                temp.push(f)
            }
        }
        )
        return temp
    }

    getWomen = (gender) => {
        let temp = []
        this.props.fighters.forEach(f => {
            if (f.weight_class.includes("Women")) {
                temp.push(f)
            }
        }
        )
        // Let's fix the ordering, the api, for some reason, gives Cyborg first and Nunes last
        let x = {}
        x = temp[0]
        temp[0] = temp[2]
        temp[2] = temp[3]
        temp[3] = x

        return temp
    }

    render() {
        return (
            <h1> TITLE HOLDERS </h1 >
        )
    }

}

const mapStateToProps = (state) => {
    return {
        fighters: state.fighters
    }
}

export default connect(
    mapStateToProps,
    { initializeTitleHolders }
)(FightersPageTitleHolders)