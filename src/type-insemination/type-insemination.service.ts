import { Injectable } from '@nestjs/common';
import { CreateTypeInseminationDto } from './dto/create-type-insemination.dto';
import { UpdateTypeInseminationDto } from './dto/update-type-insemination.dto';

@Injectable()
export class TypeInseminationService {
  create(createTypeInseminationDto: CreateTypeInseminationDto) {
    return 'This action adds a new typeInsemination';
  }

  findAll() {
    return `This action returns all typeInsemination`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeInsemination`;
  }

  update(id: number, updateTypeInseminationDto: UpdateTypeInseminationDto) {
    return `This action updates a #${id} typeInsemination`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeInsemination`;
  }
}
