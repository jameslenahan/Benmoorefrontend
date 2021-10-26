import React, { Component } from "react";
import AuthService from "../services/auth.service.js";
import axios from "axios";
import { response } from "express";

const API_URL = "https://bmp-backend-nodemysql.herokuapp.com/api/";

export default class ContractorHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser()

    };
  }
  componentDidMount() {

      axios.get(API_URL + "projects").then((response) => {
       console.log(response.data)

      }
      )
  }
  
  render() {


   
    let project = [
        {
            name: "test",
            something: "testsomething"
        },
        {
        name: "test2",
        something: "testsomething2"
      }
    
    ]

    //picture of house & information, with a map highlight w/ approximate location
    // I would like to provide a quote for this project
    return (
      <div className="container">
          <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thank You Page</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
            <div>
            {project.map(el => {
              
              return(
            
            <div class="card" style={{marginTop: "5vh"}}>
            
            <header class="card-header">
                <p class="card-header-title">
                {(el.name)}
                </p>
                <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
                </button>
            </header>
            
            <div class="card-content">
                <div class="content">
                {el.something}
                <br/>
                </div>
            </div>
            <footer class="card-footer"  style={{width: "20vw"}}
            // when the click in we want them to: "Thanks for submitting! You'll be notified if the consumer still needs a quote"
            >
                <a href="#" class="button card-footer-item">I would like to provide a quote.</a>
                {/* <a href="#" class="card-footer-item"></a> */}
              

            </footer>

            </div>
            )})}


            </div>
            
      </div>
    );
  }
}