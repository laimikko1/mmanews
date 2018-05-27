import React from 'react'
import { connect } from 'react-redux'
import { initializeEvents } from '../../reducers/eventReducer'
import { List } from 'semantic-ui-react'
import '../../../src/styles.css'
import { Dimmer, Loader, Segment, Grid, Image } from 'semantic-ui-react'
import scraper from '../../utils/scraper'
import FrontPageEventMatchups from './FrontPageEventMatchups'


class FrontPageEvents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upcomingEvents: [],
            modal: "",
            selectedItem: ""
        }
    }

    async componentDidMount() {
        await this.props.initializeEvents()
        const newEvents = await (this.getNewEvents(this.props.events))
        const newEventsWithFights = await this.getEventFights(newEvents)
        await this.setEvents(newEventsWithFights)
        await this.renderModal(this.state.upcomingEvents[0])
        console.log(this.state.modal)
    }

    handleClick = (event) => {
        return () => {
            this.setState({ selectedItem: event.id })
            this.renderModal(event)
        }
    }

    renderModal = (event) => {
        this.setState({ modal: event })
    }


    getEventFights = async (events) => {
        let matches = events.map(e =>
            scraper.getMatchups(e.id)
        )
        const res = await Promise.all(matches)
        events.forEach((e, i) => {
            e.matches = res[i]
        })
        return events
    }

    getNewEvents = (events) => {
        var today = new Date()
        const newEvents = this.props.events.filter(event =>
            this.getEventDate(event.event_date) > today
        )
        return newEvents
    }

    setEvents = (events) => {
        this.setState({ upcomingEvents: events.slice(0, 5) })
    }

    getEventDate = (event) => {
        let vuosi = event.split("-")[0];
        let kk = event.split("-")[1]
        let pp = event.split("-")[2].substring(0, 2);
        return new Date(vuosi, kk - 1, pp)
    }




    renderStyle = (id) => {
        const clickedListItem = {
            margin: "25px",
            background: "linear-gradient(-10deg, black, red)",
            display: "inline-block",
            float: "none",
            padding: "10px",
            color: "white"
        }

        const listItemStyle = {
            margin: "25px",
            background: "linear-gradient(-10deg, grey, white)",
            display: "inline-block",
            float: "none",
            padding: "10px",
            cursor: "pointer"
        }


        let style = (id == this.state.selectedItem) ?
            clickedListItem : listItemStyle
        return style
    }


    render() {
        const style = {
            marginTop: '20px',
            background: "linear-gradient(-10deg, black, grey)",
            paddingLeft: "10%",

        }

        const listItemStyle = {
            margin: "20px",
            background: "linear-gradient(-10deg, grey, white)",
            display: "inline-block",
            float: "none",
            padding: "10px"
        }

        const clickedListItem = {
            margin: "20px",
            background: "linear-gradient(-10deg, grey, red)",
            display: "inline-block",
            float: "none",
            padding: "10px"
        }

        const imageStyle = {
            position: "relative"

        }
        const imageTextStyle = {
            background: "black",
            color: "white",
            top: "80%",
            width: "300px",
            fontSize: "20px",
        }

        const matchesAreSet = !(this.state.modal.matches === undefined)
        console.log(this.state.modal.matches)

        return (
            <div>
                <div className="eventList">
                    <List verticalAlign="middle">
                        {this.state.upcomingEvents.map(e =>
                            <List.Item key={e.id} style={this.renderStyle(e.id)} onClick={this.handleClick(e)}>{e.base_title}</List.Item>)}
                    </List>
                </div>
                <div>
                    <Grid columns={2}>
                        <Grid.Column width={6}>
                            <Image src={this.state.modal.feature_image} size='medium' />
                            <div style={imageTextStyle}>
                                <p style={{ textAlign: "center"}}>{this.state.modal.title_tag_line}</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            {matchesAreSet ? (
                                <FrontPageEventMatchups matchups={this.state.modal.matches} />
                            ) :
                                (
                                    <Dimmer active inverted style={{ marginTop: "20px" }}>
                                        <Loader>Loading</Loader>
                                    </Dimmer>
                                )}
                        </Grid.Column>
                    </Grid>
                </div>
            </div >
        )
    }
}



const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}

export default connect(
    mapStateToProps,
    { initializeEvents }
)(FrontPageEvents)


