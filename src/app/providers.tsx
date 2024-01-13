'use client';

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

interface IProvidersProp {
	children: React.ReactNode;
}

export default function Providers({ children }: IProvidersProp) {
	return (
		<SessionProvider>
			<NextUIProvider>{children}</NextUIProvider>
		</SessionProvider>
	);
}
