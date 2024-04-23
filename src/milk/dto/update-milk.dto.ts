import { PartialType } from '@nestjs/mapped-types';
import { CreateMilkDto } from './create-milk.dto';

export class UpdateMilkDto extends PartialType(CreateMilkDto) {}
