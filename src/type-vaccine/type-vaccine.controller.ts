import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeVaccineService } from './type-vaccine.service';
import { CreateTypeVaccineDto } from './dto/create-type-vaccine.dto';
import { UpdateTypeVaccineDto } from './dto/update-type-vaccine.dto';

@Controller('type-vaccine')
export class TypeVaccineController {
  constructor(private readonly typeVaccineService: TypeVaccineService) {}

  @Post()
  create(@Body() createTypeVaccineDto: CreateTypeVaccineDto) {
    return this.typeVaccineService.create(createTypeVaccineDto);
  }

  @Get()
  findAll() {
    return this.typeVaccineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeVaccineService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeVaccineDto: UpdateTypeVaccineDto) {
    return this.typeVaccineService.update(+id, updateTypeVaccineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeVaccineService.remove(+id);
  }
}
