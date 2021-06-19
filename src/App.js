import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from './components/Navbar';
import RedirectUrl from './components/RedirectUrl';
// import NotFound from './components/NotFound';

import { useEffect } from 'react';

import moveToggle from './lib/moveToggle';

import Application from './components/Application';

function App() {
	useEffect(() => {
		if (localStorage.theme === 'dark') {
			document.documentElement.classList.add('dark');
			moveToggle();
		}
		if (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
			moveToggle();
			localStorage.theme = 'dark';
		}
	});

	return (
		<main className='bg-light-100 dark:bg-dark-100 dark:text-font-white text-font-black min-h-screen transition-colors duration-500'>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Application} />
					<Route exact path='/:slug' component={RedirectUrl} />
					<Redirect to={Application} />
				</Switch>
			</BrowserRouter>
		</main>
	);
}

export default App;
