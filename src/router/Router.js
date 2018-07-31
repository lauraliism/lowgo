//@flow

import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import App from '../App'

export default class AppRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<App />
		 	 </BrowserRouter>
		)
	}
}
