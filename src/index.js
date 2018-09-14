"use strict"

import React from "react"
import ReactDOM from "react-dom"
import { Route, HashRouter, Redirect, Switch } from "react-router-dom"

import Layout from "./javascripts/components/Layout"
import About from "./javascripts/components/About"
import Education from "./javascripts/components/Education"
import Experience from "./javascripts/components/Experience"
import Projects from "./javascripts/components/Projects"
import Certificates from "./javascripts/components/Certificates"
import Skills from "./javascripts/components/Skills"

const app = document.getElementById("app")

ReactDOM.render(
	<HashRouter>
	    <Switch path="/" component={Layout}>
	      	<Route exact path="/" component={About}></Route>
	     	<Route exact path="/education" name="Education" component={Education}></Route>
	      	<Route exact path="/experience" name="Experience" component={Experience}></Route>
	      	<Route exact path="/projects" name="Projects" component={Projects}></Route>
	      	<Route exact path="/certificates" name="Certificates" component={Certificates}></Route>
	     	<Route exact path="/skills" name="Skills" component={Skills}></Route>
	      	<Redirect from="*" to="/" />
	    </Switch>
  	</HashRouter>
  , app)