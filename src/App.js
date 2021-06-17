import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Links from './components/Links';
import NotFound from './components/NotFound';

import { useEffect } from 'react';

import moveToggle from './lib/moveToggle';

function App() {
	useEffect(() => {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark');
			moveToggle();
			return;
		}

		if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
			moveToggle();
			localStorage.theme = 'dark';
			return;
		}

		localStorage.theme = 'light';
	});

	return (
		<main className='bg-light-100 dark:bg-dark-100 dark:text-font-white text-font-black min-h-screen transition-colors duration-500'>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/urls' component={Links} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</main>
	);
}

export default App;
