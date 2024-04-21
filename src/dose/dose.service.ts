import { Injectable } from '@nestjs/common';
import { CreateDoseDto } from './dto/create-dose.dto';
import { UpdateDoseDto } from './dto/update-dose.dto';

@Injectable()
export class DoseService {
  create(createDoseDto: CreateDoseDto) {
    return 'This action adds a new dose';
  }

  findAll() {
    return `This action returns all dose`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dose`;
  }

  update(id: number, updateDoseDto: UpdateDoseDto) {
    return `This action updates a #${id} dose`;
  }

  remove(id: number) {
    return `This action removes a #${id} dose`;
  }
}
