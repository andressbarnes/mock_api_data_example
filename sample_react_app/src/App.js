import React, { Component } from "react";
//import { Container, Segment } from "semantic-ui-react";
import "./App.css";
import jsonServer from "./api/json-server";

class App extends Component {
  state = {
    users: []
  };

  fetchData = async term => {
    const response = await jsonServer.get(`users`, {
      params: { query: term }
    });
    this.setState({ users: response });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
