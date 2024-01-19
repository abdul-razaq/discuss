import TopicCreateForm from '@/components/topics/TopicCreateForm';
import TopicList from '@/components/topics/TopicList/topic-list';
import { Divider } from '@nextui-org/react';

export default async function Home() {
	return (
		<div className="container mx-auto max-w-6xl grid grid-cols-4 gap-4 p-4">
			<div className="col-span-3">
				<h1 className="text-xl m-2">Top Posts</h1>
			</div>
			<div className="border shadow py-4 px-3">
				<TopicCreateForm />
				<Divider className="my-4" />
				<h3 className="text-xl font-sans font-medium">Topics</h3>
				<TopicList />
			</div>
		</div>
	);
}
