import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { OdsService } from './ods.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('ods')
@Controller('ods')
export class OdsController {
  constructor(private readonly odsService: OdsService) {}


  @Get()
  @ApiOperation({ summary: 'Retorna todos as ODS existentes' })
  @ApiResponse({ status: 200, description: 'Lista de ODS retornada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Falha na requisição.' })
  @ApiResponse({ status: 500, description: 'Servidor indisponível.' })
  getAllOds() {
    return this.odsService.getAllOds();
  }

  @Get(':key')
  @ApiOperation({ summary: 'Retorna a ODS pesquisada' })
  @ApiResponse({ status: 200, description: `ODS retornada com sucesso.`})
  @ApiResponse({ status: 404, description: 'Falha na requisição.' })
  @ApiResponse({ status: 500, description: 'Servidor indisponível.' })
  findOne(@Param('key') key: string) {
    try{
      return this.odsService.getOdsById(key);
    } catch (e) {
      throw new NotFoundException(e.message)
    }
  }
}
