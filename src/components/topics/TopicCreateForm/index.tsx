'use client';

import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	Button,
	Input,
	Textarea,
	useDisclosure,
} from '@nextui-org/react';
import { useFormState } from 'react-dom';

import * as actions from '@/actions';

export default function TopicCreateForm() {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [formState, action] = useFormState(actions.createTopic, {
		errors: {
			name: [],
			description: [],
		},
	});

	return (
		<>
			<Button
				color="primary"
				className="text-xl font-sans font-medium"
				onPress={onOpen}
			>
				New Topic
			</Button>
			<Modal
				isOpen={isOpen}
				placement="top"
				size="xl"
				radius="lg"
				backdrop="opaque"
				scrollBehavior="inside"
				onOpenChange={onOpenChange}
				isDismissable={true}
			>
				<ModalContent>
					<ModalHeader>
						<h3 className="text-xl">Create a Topic</h3>
					</ModalHeader>
					<ModalBody>
						<form action={action}>
							<div className="flex flex-col items-stretch gap-4">
								<Input
									name="name"
									label="Name"
									labelPlacement="outside"
									placeholder="Name"
									isRequired
									isInvalid={!!formState.errors.name}
									errorMessage={formState.errors.name?.join(', ')}
								/>
								<Textarea
									name="description"
									placeholder="Describe your topic"
									label="Description"
									labelPlacement="outside"
									isRequired
									disableAutosize
									isInvalid={!!formState.errors.description}
									errorMessage={formState.errors.description?.join(', ')}
								/>
								{formState.errors._form && (
									<p className="text-sm font-sans text-red-400">
										{formState.errors._form?.join(', ')}
									</p>
								)}
								<Button
									type="submit"
									color="primary"
									className="text-xl font-sans font-medium text-white"
								>
									Submit
								</Button>
							</div>
						</form>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
}
