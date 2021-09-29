import "./App.css";
import React, { useEffect, useState } from "react"
import axios from "axios"
import env from "./settings"
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Items from "./Items";
import CreateFile from "./Createfile";
import Dashboard from "./dashboard";


import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";


function App() {


  return (
    <Router>
      <div>
        <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div class="container-fluid">
                <Switch>
                  <Route path="/" component={Dashboard} exact={true} />
                  <Route path="/create-file" component={CreateFile} exact={true} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}




export default App;
