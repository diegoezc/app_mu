import { Injectable } from '@nestjs/common';
import { CreatePalpatedDto } from './dto/create-palpated.dto';
import { UpdatePalpatedDto } from './dto/update-palpated.dto';

@Injectable()
export class PalpatedService {
  create(createPalpatedDto: CreatePalpatedDto) {
    return 'This action adds a new palpated';
  }

  findAll() {
    return `This action returns all palpated`;
  }

  findOne(id: number) {
    return `This action returns a #${id} palpated`;
  }

  update(id: number, updatePalpatedDto: UpdatePalpatedDto) {
    return `This action updates a #${id} palpated`;
  }

  remove(id: number) {
    return `This action removes a #${id} palpated`;
  }
}
