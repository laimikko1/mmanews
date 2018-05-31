import React from 'react'
import { connect } from 'react-redux'
import { initializeTitleHolders } from '../../reducers/fighterReducer'
import { List, Image, Grid } from 'semantic-ui-react'

class FightersPageTitleHolders extends React.Component {

    async componentWillMount() {
        await this.props.initializeTitleHolders()
        console.log(this.props.fighters)
    }

    render() {
        const mTitleHolders = this.props.fighters.filter(f => !f.weight_class.includes("Women"))
        let wTitleHolders = this.props.fighters.filter(f => f.weight_class.includes("Women"))
 
        return (
            <div>
                <h1 style={{ textAlign: "center" }}> TITLE HOLDERS </h1 >
                <Grid columns={3}>
                    <Grid.Row>
                        {mTitleHolders.map(m =>
                            <Grid.Column>
                                <p>{m.first_name}</p>
                            </Grid.Column>
                        )}
                    </Grid.Row>
                    <Grid.Row>
                        {wTitleHolders.map(m =>
                            <Grid.Column>
                                <p>{m.first_name}</p>
                            </Grid.Column>
                        )}
                    </Grid.Row>
                </Grid>
            </div >
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