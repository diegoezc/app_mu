import { PartialType } from '@nestjs/mapped-types';
import { CreatePalpatedDto } from './create-palpated.dto';

export class UpdatePalpatedDto extends PartialType(CreatePalpatedDto) {}
