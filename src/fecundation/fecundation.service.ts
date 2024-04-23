import { Injectable } from '@nestjs/common';
import { CreateFecundationDto } from './dto/create-fecundation.dto';
import { UpdateFecundationDto } from './dto/update-fecundation.dto';

@Injectable()
export class FecundationService {
  create(createFecundationDto: CreateFecundationDto) {
    return 'This action adds a new fecundation';
  }

  findAll() {
    return `This action returns all fecundation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fecundation`;
  }

  update(id: number, updateFecundationDto: UpdateFecundationDto) {
    return `This action updates a #${id} fecundation`;
  }

  remove(id: number) {
    return `This action removes a #${id} fecundation`;
  }
}
