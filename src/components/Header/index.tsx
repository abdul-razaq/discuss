import React from 'react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Input,
} from '@nextui-org/react';
import Link from 'next/link';
import HeaderAuth from '@/components/HeaderAuth';

export default async function Header() {
	return (
		<Navbar className="shadow mb-6">
			<NavbarBrand>
				<Link href="/" className="font-sans font-medium text-2xl">
					Discuss
				</Link>
			</NavbarBrand>

			<NavbarContent justify="center">
				<NavbarItem>
					<Input />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent justify="end">
				<HeaderAuth />
			</NavbarContent>
		</Navbar>
	);
}
