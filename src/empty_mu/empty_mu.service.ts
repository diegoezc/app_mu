import { Injectable } from '@nestjs/common';
import { CreateEmptyMuDto } from './dto/create-empty_mu.dto';
import { UpdateEmptyMuDto } from './dto/update-empty_mu.dto';

@Injectable()
export class EmptyMuService {
  create(createEmptyMuDto: CreateEmptyMuDto) {
    return 'This action adds a new emptyMu';
  }

  findAll() {
    return `This action returns all emptyMu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emptyMu`;
  }

  update(id: number, updateEmptyMuDto: UpdateEmptyMuDto) {
    return `This action updates a #${id} emptyMu`;
  }

  remove(id: number) {
    return `This action removes a #${id} emptyMu`;
  }
}
