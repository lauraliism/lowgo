import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import {
	NavBar,
	NavBarLogo,
	NavBarSection,
	NavBarItem,
} from './component/navbar'


class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<NavBar>
						<NavBarLogo />
						<NavBarSection>
							<NavBarItem onClick={() => { console.log('siin!')}} linkTo={'/'}>
								HOME
							</NavBarItem>
							<NavBarItem linkTo={'/car-owner'}>
								CAR OWNER
							</NavBarItem>
							<NavBarItem linkTo={'/search'}>
								SEARCH
							</NavBarItem>
						</NavBarSection>
					</NavBar>
				</header>
			</div>
		)
	}
}

export default App
