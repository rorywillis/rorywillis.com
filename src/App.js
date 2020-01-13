import React from 'react';
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PageHome from './components/PageHome';
import PagePost from './components/PagePost';

function App() {
	return (
		<Router>
			<div className="container" style={{maxWidth: 800}}>
				<Header />
				<div className="mt-4">
					<Switch>
						<Route path="/" exact>
							<PageHome />
						</Route>
						<Route path="/post/:slug">
							<PagePost />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
