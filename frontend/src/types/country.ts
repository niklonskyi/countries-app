export default interface Country {
  name: string;
  borders: Array<BorderCountry>;
  population: Array<Population>;
  flag: string;
}

interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders?: Array<BorderCountry>;
}

interface Population {
  year: number;
  value: number;
}
