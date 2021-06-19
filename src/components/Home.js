import GenerateUrl from './GenerateUrl';
import ListUrls from './ListUrls';

const Home = () => (
	<div className=' container flex flex-col max-w-3xl py-8 mx-auto'>
		<GenerateUrl />
		<ListUrls />
	</div>
);
export default Home;
