import { PartialType } from '@nestjs/swagger';
import { CreateSerieDto } from './create-series.dto';

export class UpdateSerieDto extends PartialType(CreateSerieDto) {}
