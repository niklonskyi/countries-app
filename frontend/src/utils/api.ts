import axios from 'axios';

export const fetchCountries = async () => {
  console.log(process.env.API_URL);
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}`);
  return data;
};

export const fetchCountryInfo = async (code: string) => {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${code}`);
  return data;
};
