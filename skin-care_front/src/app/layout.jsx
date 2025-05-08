import './globals.css';

export const metadata = {
  title: 'Your Site',
  description: 'Your description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
