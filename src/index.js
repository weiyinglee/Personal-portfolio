"use strict"

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, browserHistory, Redirect } from "react-router"

import Layout from "./javascripts/components/Layout"
import About from "./javascripts/components/About"
import Education from "./javascripts/components/Education"
import Experience from "./javascripts/components/Experience"
import Projects from "./javascripts/components/Projects"
import Certificates from "./javascripts/components/Certificates"
import Skills from "./javascripts/components/Skills"

const app = document.getElementById("app")

ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={Layout}>
	      	<IndexRoute component={About}></IndexRoute>
	     	<Route path={process.env.PUBLIC_URL + 'education'} name="Education" component={Education}></Route>
	      	<Route path={process.env.PUBLIC_URL + "experience"} name="Experience" component={Experience}></Route>
	      	<Route path={process.env.PUBLIC_URL + "projects"} name="Projects" component={Projects}></Route>
	      	<Route path={process.env.PUBLIC_URL + "certificates"} name="Certificates" component={Certificates}></Route>
	     	<Route path={process.env.PUBLIC_URL + "skills"} name="Skills" component={Skills}></Route>
	      	<Redirect from="*" to="/" />
	    </Route>
  	</Router>
  , app)