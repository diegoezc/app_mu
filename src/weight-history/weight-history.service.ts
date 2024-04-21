import { Injectable } from '@nestjs/common';
import { CreateWeightHistoryDto } from './dto/create-weight-history.dto';
import { UpdateWeightHistoryDto } from './dto/update-weight-history.dto';

@Injectable()
export class WeightHistoryService {
  create(createWeightHistoryDto: CreateWeightHistoryDto) {
    return 'This action adds a new weightHistory';
  }

  findAll() {
    return `This action returns all weightHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} weightHistory`;
  }

  update(id: number, updateWeightHistoryDto: UpdateWeightHistoryDto) {
    return `This action updates a #${id} weightHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} weightHistory`;
  }
}
