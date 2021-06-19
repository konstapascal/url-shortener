import GenerateUrl from './GenerateUrl';
import ListUrls from './ListUrls';

const Application = () => (
	<main className=' lg:my-20 container flex flex-col max-w-3xl mx-auto my-16 shadow'>
		<GenerateUrl />
		<ListUrls />
	</main>
);
export default Application;
