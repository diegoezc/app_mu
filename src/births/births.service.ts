import { Injectable } from '@nestjs/common';
import { CreateBirthDto } from './dto/create-birth.dto';
import { UpdateBirthDto } from './dto/update-birth.dto';

@Injectable()
export class BirthsService {
  create(createBirthDto: CreateBirthDto) {
    return 'This action adds a new birth';
  }

  findAll() {
    return `This action returns all births`;
  }

  findOne(id: number) {
    return `This action returns a #${id} birth`;
  }

  update(id: number, updateBirthDto: UpdateBirthDto) {
    return `This action updates a #${id} birth`;
  }

  remove(id: number) {
    return `This action removes a #${id} birth`;
  }
}
