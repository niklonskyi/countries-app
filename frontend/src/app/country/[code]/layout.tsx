import Link from 'next/link';

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body>
      <header className='container'>
        <Link className={'text-white'} href={`/`}>
          Home
        </Link>
      </header>
      {children}
    </body>
  );
}
