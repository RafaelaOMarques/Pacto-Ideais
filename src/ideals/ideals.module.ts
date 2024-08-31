import { Module } from '@nestjs/common';
import { IdealsService } from './ideals.service';
import { IdealsController } from './ideals.controller';
import { Ideal } from './entities/ideal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IdealsRepository } from './ideals.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Ideal])],

  controllers: [IdealsController],
  providers: [IdealsService, IdealsRepository],
  exports: [IdealsService, IdealsRepository],
})
export class IdealsModule {}
