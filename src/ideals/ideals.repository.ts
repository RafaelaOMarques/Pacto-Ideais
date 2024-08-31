import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm"
import { Ideal } from "./entities/ideal.entity";

@Injectable()
export class IdealsRepository{
  
  constructor(
    @InjectRepository(Ideal)
    private readonly idealRepository: Repository<Ideal>,
  ) {}

  async findAll(): Promise<Ideal[]>{
    return await this.idealRepository.find();
  }


  async save(ideal: Ideal): Promise<Ideal>{
    return await this.idealRepository.save(ideal);
  }

}
