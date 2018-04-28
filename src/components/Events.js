import React from 'react'
import { connect } from 'react-redux'
import { initializeEvents } from '../reducers/eventReducer'
import { List } from 'semantic-ui-react'

class Events extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            upcomingEvents: []
        }
    }

    async componentDidMount() {
        await this.props.initializeEvents()
        this.setEvents(this.getNewEvents(this.props.events))
    }

    getNewEvents = (events) => {
        var today = new Date()
        const newEvents = this.props.events.filter(event =>
            this.getEventDate(event.event_date) > today
        )
        return newEvents
    }

    setEvents = (events) => {
        console.log(`ARE WE EHERE EVERE`);
        this.setState({ upcomingEvents: events.slice(0, 5) })
    }

    getEventDate = (event) => {
        let vuosi = event.split("-")[0];
        let kk = event.split("-")[1]
        let pp = event.split("-")[2].substring(0, 2);
        return new Date(vuosi, kk - 1, pp)
    }

    render() {
        const style = {
            marginTop: '20px',
            background: "linear-gradient(-10deg, black, grey)",
            paddingLeft: "10%"
            
        }

        const listItemStyle = {
            margin: "20px",
            background: "linear-gradient(-10deg, grey, white)",
            display: "inline-block",
            float: "none",
            padding: "10px",

        }

        return (
            <div style={style}>
                <List verticalAlign="middle">
                    {this.state.upcomingEvents.map(e =>
                        <List.Item style={listItemStyle}>{e.base_title}</List.Item>)}
                </List>
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


