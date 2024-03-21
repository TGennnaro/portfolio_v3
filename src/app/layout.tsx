import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';
import '../styles/globals.css';
import { twMerge } from 'tailwind-merge';
import Providers from '@/components/Providers';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={twMerge(openSans.className, 'bg-background')}>
				<Providers>
					<Header />
					{children}
				</Providers>
			</body>
		</html>
	);
}