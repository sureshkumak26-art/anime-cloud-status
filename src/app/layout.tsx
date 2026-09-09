import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anime Cloud — System Status',
  description: 'Live service status and incident updates for Anime Cloud.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}