import type { NextPage } from 'next';
import Head from 'next/head';
import { trpc } from '../utils/trpc';
import 'tailwindcss/tailwind.css';

type TechnologyCardProps = {
	name: string;
	description: string;
	documentation: string;
};

const Home: NextPage = () => {
	//const hello = trpc.useQuery(['example.hello', { text: 'from tRPC' }]);

	return <div className='text-2xl text-red-300'>Hello World</div>;
};

export default Home;
