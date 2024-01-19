'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '@nextui-org/react';

interface IFormButtonProps {
	children: React.ReactNode;
}
export default function FormButton({ children }: IFormButtonProps) {
	const { pending } = useFormStatus();
	return (
		<Button
			type="submit"
			color="primary"
			className="text-xl font-sans font-medium text-white"
			isLoading={pending}
		>
			{children}
		</Button>
	);
}
