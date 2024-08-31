import { Module } from '@nestjs/common';
import { OdsService } from './ods.service';
import { OdsController } from './ods.controller';

@Module({
  controllers: [OdsController],
  providers: [OdsService],
})
export class OdsModule {}
