import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import HeadlineThumbnail from '../components/HeadlineThumbnail'
import { initializeHeadlines } from '../reducers/headlineReducer'
import { Image } from 'semantic-ui-react'

class Headlines extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: ''
        }
    }

    async componentWillMount() {
        await this.props.initializeHeadlines()
        this.setState({ modal: this.props.headlines[0] })
        console.log(this.state);
    }


    renderModal = (headline) => {
        return () => {
            this.setState({ modal: headline })

        }
    }


    render() {

        const uutiset = {
            background: "linear-gradient(-10deg, black, grey)"
        }

        const topKek = {
            paddingTop: "25px",
        }

        const header = {
            marginTop: "5px",
            padding: "10px",
            borderRadius: "25px",
            fontSize: "10px",
            borderStyle: "solid",
            marginBottom: "10px",
            backgroundColor: "white",
            colorP: "red"
        }
        const image = {
            marginTop: "25px",
            width: "350px",
            height: "250px",
            borderRadius: "25px"
        }
        const span = {
            paddingLeft: "10px",
            fontWeight: "bold",
            float: "right",
            paddingRight: "10px"
        }

        return (
            <div style={uutiset}>
                <Grid columns={3}>
                    <Grid.Column width={3}>
                        <ul>
                            {this.props.headlines.map(headline =>
                                <HeadlineThumbnail
                                    key={headline.id}
                                    headline={headline}
                                    handleClick={this.renderModal(headline)}
                                />
                            )}
                        </ul>
                    </Grid.Column>
                    <div style={topKek}>
                        <Grid.Column width={6}>
                            <Grid.Row>
                                <img style={image} src={this.state.modal.thumbnail} size="medium" circular />
                            </Grid.Row>
                            <Grid.Row>
                                <div style={header}>
                                    <p>{this.state.modal.title} <span style={span}>WATCH</span> </p>

                                </div>
                            </Grid.Row>
                        </Grid.Column>
                    </div>
                    <Grid.Column style={topKek} width={3}>
                            <Grid.Row>
                            <img style={image} src={this.state.modal.thumbnail} size="medium" circular />

                            </Grid.Row>
                        </Grid.Column>
                </Grid>
            </div>
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
    { initializeHeadlines }
)(Headlines)