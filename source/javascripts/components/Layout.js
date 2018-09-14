"use strict"

import React from "react"

import Header from "./Header"

export default class Layout extends React.Component {
	render() {
		return (
			<div className="unselectableText">
				<Header />
				<div className="container-fluid p-0">
					{this.props.children}
				</div>
			</div>
		)
	}
}