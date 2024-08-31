import { Controller, Get, Post, Body} from '@nestjs/common';
import { IdealsService } from './ideals.service';
import { CreateIdealDto } from './dto/create-ideal.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('ideals')
@Controller('ideals')
export class IdealsController {
  constructor(private readonly idealsService: IdealsService) {}

  @Post()
  @ApiOperation({ summary: 'Cadastra uma nova ideia' })
  @ApiResponse({ status: 201, description: 'Ideia cadastrada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Falha na requisição.' })
  @ApiResponse({ status: 500, description: 'Servidor indisponível.' })
  create(@Body() createIdealDto: CreateIdealDto) {
    const {typeODS, title, description, example} = createIdealDto;
    return this.idealsService.newIdeal(typeODS, title, description, example);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos as ideias cadastradas' })
  @ApiResponse({ status: 200, description: 'Lista de ideias retornada com sucesso.' })
  @ApiResponse({ status: 404, description: 'Falha na requisição.' })
  @ApiResponse({ status: 500, description: 'Servidor indisponível.' })
  findAll() {
    return this.idealsService.listIdeals();
  }

}
