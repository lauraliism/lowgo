//@flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
	navbar: {
		backgroundColor: 'transparent',
	},
}

export default class NavBar extends Component {
	static propTypes = {
		children: PropTypes.any,
	}

	render() {
		const { children } = this.props
		return (
			<nav  style={styles.navbar} className='navbar navbar-full navbar-light bg-faded'>
				{children}
			</nav>
		)
	}
}