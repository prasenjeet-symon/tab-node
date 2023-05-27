import { Client } from 'appwrite';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tab Node',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const client = new Client();
  client.setEndpoint('https://cloud.appwrite.io/v1').setProject('64704a2d0b7aa4ccbdf3');

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
