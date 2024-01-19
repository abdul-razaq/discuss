import { Chip } from '@nextui-org/react';
import Link from 'next/link';
import db from '@/db';

import Paths from '@/paths';

export default async function TopicList() {
	const topics = await db.topic.findMany();

	return (
		<div className="my-4 w-full">
			{topics.map(topic => (
				<div key={topic.id} className="flex flex-row flex-wrap gap-2">
					<Link href={Paths.topicShowPath(topic.slug)}>
						<Chip variant="shadow" color="secondary" size="md">
							{topic.slug}
						</Chip>
					</Link>
				</div>
			))}
		</div>
	);
}
