import './styles/App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Links from './components/Links';
import NotFound from './components/NotFound';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route exact path='/urls' component={Links} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
