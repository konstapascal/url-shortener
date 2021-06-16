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
		<section className='bg-gray-50 dark:bg-[#272822] dark:text-gray-50 min-h-screen text-gray-900 transition-colors duration-500'>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/urls' component={Links} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</section>
	);
}

export default App;
