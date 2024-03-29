import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import ConsumerPage from "./components/board-user.form"
import ContractorHome from "./components/board-contractor.home"

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
     <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
    <div>
        <meta charSet="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title></title>
       <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css" />
        <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
          </a>
          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
          <Link to={"/"}>
            <a className="navbar-item" style={{fontSize: "150%"}}>
            
           
            Ben Moore Painter</a>
            </Link>
            {/* <a className="navbar-item">Documentation</a> */}
            {showModeratorBoard && (
              <Link to={"/mod"}>
              <li className="navbar-item">
                
                  Moderator Board
                
              </li>
              </Link>
            )}

            {showAdminBoard && (
               <Link to={"/admin"}>
              <li className="navbar-item">
               
                  Admin Board
                
              </li>
              </Link>
            )}

            {currentUser && (
              <Link to={"/user"}>
              <li className="navbar-item">
                
                  {/* User */}
                
              </li>
              </Link>
            )}
          </div>

          {currentUser ? (
            <div className="navbar">
              <Link to={"/profile"}>
              <li className="navbar-item" style={{fontSize: "120"}}>
                <a className="button" style={{borderColor: "white"}}>
                
                  {currentUser.username.toUpperCase()}
                  </a>
              </li>
              </Link>
              <li className="navbar-item">
                <a className="button" href="/login"onClick={this.logOut}  style={{color: "black"}}>
                  Log out
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-end">
              <li className="navbar-item">
              <div class="buttons">
              <Link to={"/register"}>
          <a class="button is-primary">
         
                  Sign Up
               
          </a>
          </Link>
          <Link to={"/login"}>
          <a class="button is-light">
         
                  Login
               
          </a>
          </Link>
              </div>

              </li>

            </div>
          )}
          </div>
          
  
      
     
      </nav>
      </div>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/form" component={ConsumerPage}/>
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
            <Route path="/contractorhome" component={ContractorHome} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;



// <nav className="navbar navbar-expand" style={{color: "black"}}>
// <Link to={"/"} className="navbar-brand" style={{marginLeft: "5vw"}}>
//   Ben Moore Painter
// </Link>
// <div className="navbar-nav mr-auto">
//   <li className="nav-item">
//     <Link to={"/home"} className="nav-link">
//       Home
//     </Link>
//   </li>

//   {showModeratorBoard && (
//     <li className="nav-item">
//       <Link to={"/mod"} className="nav-link">
//         Moderator Board
//       </Link>
//     </li>
//   )}

//   {showAdminBoard && (
//     <li className="nav-item">
//       <Link to={"/admin"} className="nav-link">
//         Admin Board
//       </Link>
//     </li>
//   )}

//   {currentUser && (
//     <li className="nav-item">
//       <Link to={"/user"} className="nav-link">
//         User
//       </Link>
//     </li>
//   )}
// </div>

// {currentUser ? (
//   <div className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <Link to={"/profile"} className="nav-link">
//         {currentUser.username}
//       </Link>
//     </li>
//     <li className="nav-item">
//       <a href="/login" className="nav-link" onClick={this.logOut}>
//         LogOut
//       </a>
//     </li>
//   </div>
// ) : (
//   <div className="navbar-nav ml-auto">
//     <li className="nav-item">
//       <Link to={"/login"} className="nav-link">
//         Login
//       </Link>
//     </li>

//     <li className="nav-item">
//       <Link to={"/register"} className="nav-link">
//         Sign Up
//       </Link>
//     </li>
//   </div>
// )}
// </nav>