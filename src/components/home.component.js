import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }
  

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
        <section class="hero">
        <div class="hero-body" style={{textAlign: "center"}}>
          <p class="title">
          Welcome to Ben Moore Painter!
          </p>
          <p class="subtitle">
          This tool helps our customers find trusted, local painters for their projects.
          </p>
          <Link to={"/form"}>
            <a className="button is-large is-primary is-rounded is-outlined" style={{width: "10vw", marginTop: "10vh"}}> 
            Find a Painter
            </a>
          </Link>
       
        </div>

      </section>

        </header>
      </div>
    );
  }
}

{/* <h3>{this.state.content}</h3> */}