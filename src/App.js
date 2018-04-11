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
import headlineThumbnail from './components/HeadlineThumbnail'
import Headlines from './components/Headlines'

class App extends React.Component {
  componentWillMount() {
    this.props.initializeNews()
  }
  render() {

    const style = {
      paddingRight: "100px",
      paddingLeft: "100px"
    }
    return (
      <Container style={style}>
        <p>moi</p>
        <Headlines />
        {/* <Menu>
          <Menu.Item>
            <a href="'#'">eka</a>
          </Menu.Item>
          <Menu.Item>
            <a href="'#'">toka</a>
          </Menu.Item>
          <Menu.Item>
            <a href="'#'">kolmas</a>
          </Menu.Item>
        </Menu > */}

      </Container >

    )
  }
}

export default connect(
  null,
  { initializeNews }
)(App);
