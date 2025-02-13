import { Module } from '@nestjs/common';
import { CountriesModule } from './countries/countries.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CountriesModule],
})
export class AppModule {}
