import { Injectable } from '@nestjs/common';
import { CreateTypeVaccineDto } from './dto/create-type-vaccine.dto';
import { UpdateTypeVaccineDto } from './dto/update-type-vaccine.dto';

@Injectable()
export class TypeVaccineService {
  create(createTypeVaccineDto: CreateTypeVaccineDto) {
    return 'This action adds a new typeVaccine';
  }

  findAll() {
    return `This action returns all typeVaccine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeVaccine`;
  }

  update(id: number, updateTypeVaccineDto: UpdateTypeVaccineDto) {
    return `This action updates a #${id} typeVaccine`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeVaccine`;
  }
}
