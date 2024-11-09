import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateSerieDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo titulo no debe ser vacío' })
  @IsString({ message: 'El campo titulo debe ser de tipo cadena' })
  @MaxLength(250, {
    message: 'El campo titulo no debe ser mayor a 250 caracteres',
  })
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis no debe ser vacío' })
  @IsString({ message: 'El campo sinopsis debe ser de tipo cadena' })
  @MaxLength(5000, {
    message: 'El campo sinopsis no debe ser mayor a 5000 caracteres',
  })
  readonly sinopsis: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo director no debe ser vacío' })
  @IsString({ message: 'El campo director debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo director no debe ser mayor a 100 caracteres',
  })
  readonly director: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo tipoGenero no debe ser vacío' })
  @IsString({ message: 'El campo tipoGenero debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El campo tipoGenero no debe ser mayor a 100 caracteres',
  })
  readonly tipoGenero: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo temporadas no debe ser vacío' })
  @IsNumber({}, { message: 'El campo temporadas debe ser de tipo numero' })
  readonly temporadas: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo fechaEstreno debe estar definido' })
  @IsDateString({}, { message: 'El campo fechaEstreno debe ser de tipo fecha' })
  readonly fechaEstreno: Date;
}
