import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateIdealDto {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'ODS13', description: 'ODS a qual a ideia esta vinculada' })
  typeODS: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Aplicativo para fomentar a empregabilidade feminina', description: 'Campo para descrever um titulo da ideia suscintamente' })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Aplicativo para fomentar a empregabilidade feminina que possibilita comunicação entre mulheres e empresas (...)', description: 'Campo para descrever detalhadamente a ideia ' })
  description: string;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'exemplo', description: 'Campo para indicar exemplos quando a ideia for mai abstrata' })
  example: string;
}
