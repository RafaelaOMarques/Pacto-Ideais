import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ideal } from './ideals/entities/ideal.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [Ideal],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Ideal]),
  ],
  exports: [TypeOrmModule],
})
export class DataSourceModule {}