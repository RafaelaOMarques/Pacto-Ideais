import { IsNotEmpty, IsString } from "class-validator";

export class CreateIdealDto {

  @IsString()
  @IsNotEmpty()
  typeODS: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
  
  @IsString()
  @IsNotEmpty()
  example: string;
}
