//@flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const styles = {
	listItem: {
		fontFamily: 'Roboto, sans-serif',
		fontSize: 14,
		fontWeight: 'bold',
		letterSpacing: 0.5,
		margin: 10,
	},
}


export default class NavBarbrand extends Component {
	static propTypes = {
		linkTo: PropTypes.string,
		onClick: PropTypes.func,
		children: PropTypes.any,
	}

	static defaultProps = {
		linkTo: '#',
		onClick: () => console.log('SIIN!!!!'),
		children: [],
	}

	render () {
		const { linkTo, onClick, children } = this.props
		return(
			<li className='nav-item'>
				<Link className='nav-link' to={linkTo} style={styles.listItem} onClick={onClick}>
					{children}
				</Link>
			</li>
		)
	}
}