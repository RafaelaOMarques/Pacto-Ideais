import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ideal } from './ideals/entities/ideal.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT),
        username: process.env.PGUSER,
        password: String (process.env.PGPASSWORD),
        database: process.env.PGDATABASE,
        entities: [Ideal],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Ideal]),
  ],
  exports: [TypeOrmModule],
})
export class DataSourceModule {}