"use strict"

import React from "react"

import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {
	render() {
		return (
			<div className="unselectableText">
				<div className="container">
					<Header/>
					<div>
						Hello World
					</div>
					<Footer />
				</div>
			</div>
		)
	}
}