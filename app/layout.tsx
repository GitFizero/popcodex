import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: "PopCodex — L'encyclopédie pop culture",
  description: 'PopCodex est votre guide encyclopédique des univers de la pop culture.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
