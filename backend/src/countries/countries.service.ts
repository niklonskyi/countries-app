import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CountriesService {
  async getAvailableCountries() {
    try {
      const response = await axios.get(
        `${process.env.NAGER_URL}/AvailableCountries`,
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        'Failed to fetch countries',
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }

  async getCountryInfo(countryCode: string) {
    try {
      const [countryData, populationData, flagData] = await Promise.all([
        axios.get(`${process.env.NAGER_URL}/CountryInfo/${countryCode}`),
        axios.get(`${process.env.COUNTRIES_SNOW_URL}/population`),
        axios.get(`${process.env.COUNTRIES_SNOW_URL}/flag/images`),
      ]);

      return {
        name: countryData.data.commonName,
        borders: countryData.data.borders,
        population:
          populationData.data.data.find(
            (c: any) => c.country === countryData.data.commonName,
          )?.populationCounts || [],
        flag:
          flagData.data.data.find(
            (c: any) => c.name === countryData.data.commonName,
          )?.flag || '',
      };
    } catch (error) {
      throw new HttpException(
        'Failed to fetch country info',
        HttpStatus.BAD_REQUEST,
        { cause: error },
      );
    }
  }
}
