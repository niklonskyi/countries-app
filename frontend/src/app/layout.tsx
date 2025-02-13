import './globals.css';

export const metadata = {
  title: 'Countries App',
  description: 'Made by Niklonskyi',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
