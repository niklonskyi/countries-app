'use client';

import { useEffect, useState } from 'react';
import { fetchCountries } from '@/utils/api';
import Link from 'next/link';

export default function Home() {
  const [countries, setCountries] = useState<
    { countryCode: string; name: string }[]
  >([]);

  useEffect(() => {
    fetchCountries().then(setCountries);
  }, []);

  return (
    <div className='container'>
      <h1 className='text-white text-4xl font-bold text-center text-gray-800 mb-6'>
        Countries
      </h1>
      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {countries.map((country) => (
          <li key={country.countryCode} className='text-center'>
            <Link
              href={`/country/${country.countryCode}`}
              className='button block h-full flex items-center justify-center'
            >
              {country.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
