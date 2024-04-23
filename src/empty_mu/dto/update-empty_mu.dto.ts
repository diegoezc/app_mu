import { PartialType } from '@nestjs/mapped-types';
import { CreateEmptyMuDto } from './create-empty_mu.dto';

export class UpdateEmptyMuDto extends PartialType(CreateEmptyMuDto) {}
