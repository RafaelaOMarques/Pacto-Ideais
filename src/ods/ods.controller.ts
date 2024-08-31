import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { OdsService } from './ods.service';

@Controller('ods')
export class OdsController {
  constructor(private readonly odsService: OdsService) {}


  @Get()
  getAllOds() {
    return this.odsService.getAllOds();
  }

  @Get(':key')
  findOne(@Param('key') key: string) {
    try{
      return this.odsService.getOdsById(key);
    } catch (e) {
      throw new NotFoundException(e.message)
    }
  }
}
