import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdealsModule } from './ideals/ideals.module';
import { DataSourceModule } from './typeorm.module';
import { UserModule } from './user/user.module';
import { OdsModule } from './ods/ods.module';
require('dotenv').config();

@Module({
  imports: [DataSourceModule, IdealsModule, UserModule, OdsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
