import React, { Component, Fragment } from 'react';
import './App.css';

//? Components
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

/**
 *! Display Cards
 *! Display Cards based on Search
 ** Create Scrollable Component with <div style={ css: val, ... }>
 ** Style Scrollbars
 ** Create Error Boundary
 */
class App extends Component {
	constructor() {
		super();

		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { robots, searchfield } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		});

		return !robots.length
			? <h1 id="App-loading" className="f1 tc">Loading... </h1>
			: (
				<Fragment>
					<div className="tc">
						<h1 id="page-title" className="f1">RoboFriends</h1>
						<SearchBox searchChange={this.onSearchChange} />
						<Scroll>
							<ErrorBoundary>
								<CardList robots={filteredRobots} />
							</ErrorBoundary>
						</Scroll>
					</div>
				</Fragment>
			);


	}
}

export default App;
