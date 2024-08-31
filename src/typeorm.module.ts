import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ideal } from './ideals/entities/ideal.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: [Ideal],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([Ideal]),
  ],
  exports: [TypeOrmModule],
})
export class DataSourceModule {}