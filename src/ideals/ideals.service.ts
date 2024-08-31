import { BadRequestException, Injectable } from '@nestjs/common';
import { IdealsRepository } from './ideals.repository';
import { Ideal } from './entities/ideal.entity';
import { ODS } from '../shared/constants/ods.constantes';

@Injectable()
export class IdealsService {

  constructor(
    private readonly idealsRepository: IdealsRepository
  ){}

  async listIdeals(): Promise<Ideal[]> {
    const ideals = await this.idealsRepository.findAll();

    return ideals.map(ideal =>{
      const odsDetails = ODS[ideal.typeODS];
      return{
        ...ideal,
        odsDetails,
      }
    })
  }

  async newIdeal(
    typeODS: string,
    title: string,
    description: string,
    example: string,
  ): Promise<Ideal>{

    if (!ODS[typeODS]){
      throw new BadRequestException(`O TypeODS ${typeODS} não é válido. Informe um TypeODS entre: ODS1 a ODS17`)
    }

    const odsDetails = ODS[typeODS];

    const ideal = new Ideal(typeODS, title, description, example )
    return await this.idealsRepository.save(ideal)
  }
}
