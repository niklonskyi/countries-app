'use client';

import { useEffect, useState } from 'react';
import { fetchCountryInfo } from '@/utils/api';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Country from '@/types/country';

function CountryPage() {
  const [country, setCountry] = useState<Country | null>(null);
  const { code } = useParams();

  useEffect(() => {
    if (code) fetchCountryInfo(code as string).then(setCountry);
  }, [code]);

  if (!country)
    return <p className='container text-center text-white'>Loading...</p>;

  return (
    <div className='container'>
      <div className='card flex flex-col items-center text-center'>
        <h1 className='text-3xl font-bold text-gray-800'>{country.name}</h1>
        <Image
          className='w-40 h-24 rounded-lg shadow-md mt-2'
          src={country.flag}
          alt={`${country.name} flag`}
          width={150}
          height={150}
        />
      </div>
      <div className='card mt-6'>
        <h2 className='text-xl font-semibold text-gray-700'>
          Bordering Countries
        </h2>
        <ul className='mt-2 flex flex-wrap gap-5'>
          {country.borders.map((border) => (
            <li key={border.commonName}>
              <a className='button' href={`/country/${border.countryCode}`}>
                {border.commonName}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='card mt-6'>
        <h2 className='text-xl font-semibold text-gray-700'>Population Data</h2>
        <ResponsiveContainer width='100%' height={400}>
          <LineChart
            className='mx-auto mt-4'
            data={country.population}
          >
            <XAxis dataKey='year' />
            <YAxis width={80}/>
            <Tooltip />
            <Line type='monotone' dataKey='value' stroke='#8884d8' />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default CountryPage;
