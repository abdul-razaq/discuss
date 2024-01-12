'use client';

import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

interface IProvidersProp {
	children: React.ReactNode;
}

export default function Providers({ children }: IProvidersProp) {
	return <NextUIProvider>{children}</NextUIProvider>;
}
