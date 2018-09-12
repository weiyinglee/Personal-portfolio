"use strict"

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, browserHistory, Redirect } from "react-router"

import Layout from "./components/Layout"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Skills from "./components/Skills"

const app = document.getElementById("app")

ReactDOM.render(
	<Router history={browserHistory}>
	    <Route path="/" component={Layout}>
	      	<IndexRoute component={About}></IndexRoute>
	     	<Route path="education" name="Education" component={Education}></Route>
	      	<Route path="experience" name="Experience" component={Experience}></Route>
	      	<Route path="projects" name="Projects" component={Projects}></Route>
	      	<Route path="certificates" name="Certificates" component={Certificates}></Route>
	     	<Route path="skills" name="Skills" component={Skills}></Route>
	      	<Route path="contact" name="Contact" component={Contact}></Route>
	      	<Redirect from="*" to="/" />
	    </Route>
  	</Router>
  , app)