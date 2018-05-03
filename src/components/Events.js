import React from 'react'
import { connect } from 'react-redux'
import { initializeEvents } from '../reducers/eventReducer'
import { List } from 'semantic-ui-react'
import '../styles.css'
import { Grid, Image } from 'semantic-ui-react'

class Events extends React.Component {
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
        this.setEvents(this.getNewEvents(this.props.events))
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
            position: "absolute",
            top: "80%",
            width: "300px",
            fontSize: "20px"
        }

        return (
            <div>
                <div className="eventList">
                    <List verticalAlign="middle">
                        {this.state.upcomingEvents.map(e =>
                            <List.Item style={this.renderStyle(e.id)} onClick={this.handleClick(e)}>{e.base_title}</List.Item>)}
                    </List>
                </div>
                <div style={{ position: "relative" }}>
                    <Grid columns={2}>
                        <Grid.Column width={8}>
                            <Image src={this.state.modal.feature_image} size='medium' />
                            <div style={imageTextStyle}>
                                <p style={{textAlign: "center"}}>{this.state.modal.title_tag_line}</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <h2>HAHA</h2>
                        </Grid.Column>

                    </Grid>

                </div>
            </div>
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
)(Events)


