
import React, { Component } from 'react'

export default class NavBarSection extends Component {

	render () {
		const { children } = this.props
		return (
			<ul className='nav navbar-nav flex-row' >
				{children}
			</ul>
		)
	}
}