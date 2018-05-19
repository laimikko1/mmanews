import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route, Link, Redirect
} from 'react-router-dom'
import { Container, Table, Button, Menu } from 'semantic-ui-react'
import newsService from './services/news'
import { initializeNews } from './reducers/newsReducer'
import { initializeHeadlines } from './reducers/headlineReducer'
import { initializeEvents } from './reducers/eventReducer'
import headlineThumbnail from './components/HeadlineThumbnail'
import Headlines from './components/Headlines'
import Events from './components/Events'
import scraper from './utils/scraper'

class App extends React.Component {
  componentWillMount() {
    this.props.initializeNews()
  }
  render() {

    const style = {
      paddingRight: "100px",
      paddingLeft: "100px"
    }

    const menuStyle = {
      paddingTop: "2%",
      paddingRight: "40%",
      paddingLeft: "35%",
      background: "linear-gradient(-10deg, black, grey)",
      paddingBottom: "2%"

    }

    const linkStyle = {
      color: "black",
      padding: "5%",
      margin: "50px%",
      background: "white",
      borderRadius: "10px"
    }
    return (
      <Container>
      <Router>
        <div>
        <p style={{float:"left", marginTop: "20px", marginLeft: "10px", color: "red", fontWeight: "bold"}}>MMANEWS</p>
          <div style={menuStyle}>
            <Link style={linkStyle} to="/">Home</Link> &nbsp;
            <Link style={linkStyle} to="/fighters">Fighters</Link> &nbsp;
            <Link style={linkStyle} to="/events">Events</Link>
          </div>
          <Route exact path="/" render={() => <Headlines />} />
          <Route path="/events" render={() => <Events />} />
        </div>
      </Router >
  </Container>

    )
  }
}

export default connect(
  null,
  { initializeNews }
)(App);
