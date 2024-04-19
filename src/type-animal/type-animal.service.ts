import { Injectable } from '@nestjs/common';
import { CreateTypeAnimalDto } from './dto/create-type-animal.dto';
import { UpdateTypeAnimalDto } from './dto/update-type-animal.dto';

@Injectable()
export class TypeAnimalService {
  create(createTypeAnimalDto: CreateTypeAnimalDto) {
    return 'This action adds a new typeAnimal';
  }

  findAll() {
    return `This action returns all typeAnimal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeAnimal`;
  }

  update(id: number, updateTypeAnimalDto: UpdateTypeAnimalDto) {
    return `This action updates a #${id} typeAnimal`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeAnimal`;
  }
}
