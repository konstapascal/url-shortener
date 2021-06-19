import GenerateUrl from './GenerateUrl';
import ListUrls from './ListUrls';
import Footer from './Footer';

const Application = () => (
	<>
		<div className=' dark:border-gray-400 container flex flex-col max-w-4xl mx-auto my-12 transition-colors duration-500 border-2 rounded-md'>
			<GenerateUrl />
			<ListUrls />
		</div>
		<Footer />
	</>
);
export default Application;
