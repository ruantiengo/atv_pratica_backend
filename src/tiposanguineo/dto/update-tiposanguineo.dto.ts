import { PartialType } from '@nestjs/mapped-types';
import { CreateTiposanguineoDto } from './create-tiposanguineo.dto';

export class UpdateTiposanguineoDto extends PartialType(CreateTiposanguineoDto) {}
