import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './products/products.module';
import { CategoryModule } from './categories/categories.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(dataSourceOptions),
    ProductModule,
    CategoryModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
