'use client';

import React from 'react';
import { useSession } from 'next-auth/react';
import {
	NavbarItem,
	Button,
	Avatar,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@nextui-org/react';
import * as actions from '@/actions';

export default function HeaderAuth() {
	const session = useSession();

	let authContent: React.ReactNode;

	if (session.status === 'loading') {
		authContent = null;
	} else if (session?.data?.user) {
		authContent = (
			<Popover placement="left">
				<PopoverTrigger>
					<Avatar src={session.data.user.image || ''} />
				</PopoverTrigger>
				<PopoverContent>
					<div className="p-4">
						<form action={actions.signOut}>
							<Button type="submit">Sign Out</Button>
						</form>
					</div>
				</PopoverContent>
			</Popover>
		);
	} else {
		authContent = (
			<>
				<NavbarItem>
					<form action={actions.signIn}>
						<Button color="secondary" variant="bordered" type="submit">
							Sign In
						</Button>
					</form>
				</NavbarItem>
				<NavbarItem>
					<form action={actions.signIn}>
						<Button color="primary" variant="flat" type="submit">
							Sign Up
						</Button>
					</form>
				</NavbarItem>
			</>
		);
	}

	return authContent;
}
