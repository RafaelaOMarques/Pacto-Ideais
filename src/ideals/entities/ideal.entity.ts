import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ideal')
export class Ideal {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public typeODS: string;

  @Column({ nullable: false })
  public title: string;

  @Column({ nullable: false })
  public description: string;

  @Column({ nullable: false })
  public example: string;

  constructor(
    typeODS: string, title: string, description: string, example: string
  ){
    this.typeODS = typeODS
    this.title = title;
    this.description = description;
    this.example = example;
  }

}
