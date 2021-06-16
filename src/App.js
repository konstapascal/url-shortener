import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Links from './components/Links';
import NotFound from './components/NotFound';

import { useEffect } from 'react';

function App() {
	useEffect(() => {
		const toggle = document.querySelector('#toggle');

		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';

			toggle.classList.toggle('left-1');
			toggle.classList.toggle('left-7');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	});

	return (
		<section className='bg-gray-50 dark:bg-[#272822] dark:text-gray-50 min-h-screen text-gray-900'>
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
