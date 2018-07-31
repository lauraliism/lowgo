//@flow

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo-dark.png'

const styles = {
	logo: {
		height: 25,
		width: 'auto',
		verticalAlign: 'baseline',
	},
}


export default class NavBarLogo extends Component {

	render() {
		return(
			<Link className='navbar-brand' to={'/'}>
				<img src={logo} style={styles.logo} alt={'logo'} />
			</Link>
		)
	}
}