import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Allen Nguyen',
  description: "Allen Nguyen's portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}