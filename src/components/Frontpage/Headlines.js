import React from 'react'
import { connect } from 'react-redux'
import { Grid, Container, Image } from 'semantic-ui-react'
import HeadlineThumbnail from './HeadlineThumbnail'
import HeadlineNewsStory from './HeadlineNewsStory'
import { initializeHeadlines } from '../../reducers/headlineReducer'
import FrontPageEvents from './FrontPageEvents'

class Headlines extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: ''
        }
    }

    async componentDidMount() {
        await this.props.initializeHeadlines()
        this.setState({ modal: this.props.headlines[0] })
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
            <Container style={{ marginTop: "50px" }}>
                <div style={uutiset}>
                    <Grid columns={3}>
                        <Grid.Column width={3}>
                            <ul>
                                {this.props.topNews.map(headline =>
                                    <HeadlineThumbnail
                                        key={headline.id}
                                        headline={headline}
                                        handleClick={this.renderModal(headline)}
                                    />
                                )}
                            </ul>
                        </Grid.Column>
                        <div style={topKek}>
                            <Grid.Column width={8}>
                                <Grid.Row>
                                    <img style={image} src={this.state.modal.thumbnail} size="medium" circular="true" />
                                </Grid.Row>
                                <Grid.Row>
                                    <div style={header}>
                                        <p>{this.state.modal.title} <span style={span}>WATCH</span> </p>

                                    </div>
                                </Grid.Row>
                            </Grid.Column>
                        </div>
                        <Grid.Column style={topKek} width={6}>
                            <Grid.Row>
                                <HeadlineNewsStory headlines={this.props.headlines.slice(5)} />

                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </div>

                <FrontPageEvents />
            </Container>
        )
    }
}

const getTopHeadlines = (headlines) => {
    let h = headlines.filter(headl =>
        (headl.thumbnail))
    return h.slice(0, 5)
}

const mapStateToProps = (state) => {
    return {
        headlines: state.headlines,
        topNews: getTopHeadlines(state.headlines)
    }
}


export default connect(
    mapStateToProps,
    { initializeHeadlines }
)(Headlines)