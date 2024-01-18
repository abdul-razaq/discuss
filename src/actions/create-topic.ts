'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import type { Topic } from '@prisma/client';
import { redirect } from 'next/navigation';

import db from '@/db';
import paths from '@/paths';
import { auth } from '@/auth';

const createTopicSchema = z.object({
	name: z
		.string()
		.min(3)
		.max(20)
		.regex(/[a-z-]/, {
			message: 'Must be lowercase letters or dashes without spaces',
		}),
	description: z.string().min(10).max(500),
});

interface CreateTopicFormState {
	errors: {
		name?: string[];
		description?: string[];
		_form?: string[];
	};
}

export async function createTopic(
	formState: CreateTopicFormState,
	formData: FormData,
): Promise<CreateTopicFormState> {
	// TODO: Revalidate the homepage after creating a topic
	const result = createTopicSchema.safeParse({
		name: formData.get('name'),
		description: formData.get('description'),
	});

	if (!result.success) {
		return {
			errors: result.error.flatten().fieldErrors,
		};
	}

	const session = await auth();

	if (!session || !session.user) {
		return {
			errors: {
				_form: ['You must be signed in to perform this action'],
			},
		};
	}

	let topic: Topic;
	try {
		topic = await db.topic.create({
			data: {
				slug: result.data.name,
				description: result.data.description,
			},
		});
	} catch (error) {
		if (error instanceof Error) {
			return {
				errors: {
					_form: [error.message],
				},
			};
		}
		return {
			errors: {
				_form: ['Something went wrong'],
			},
		};
	}

	revalidatePath(paths.home());
	redirect(paths.topicShowPath(topic.slug));
}
