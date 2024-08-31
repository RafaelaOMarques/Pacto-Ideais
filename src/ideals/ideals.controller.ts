import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IdealsService } from './ideals.service';
import { CreateIdealDto } from './dto/create-ideal.dto';

@Controller('ideals')
export class IdealsController {
  constructor(private readonly idealsService: IdealsService) {}

  @Post()
  create(@Body() createIdealDto: CreateIdealDto) {
    const {typeODS, title, description, example} = createIdealDto;
    return this.idealsService.newIdeal(typeODS, title, description, example);
  }

  @Get()
  findAll() {
    return this.idealsService.listIdeals();
  }

}
