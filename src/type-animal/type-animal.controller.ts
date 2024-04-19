import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeAnimalService } from './type-animal.service';
import { CreateTypeAnimalDto } from './dto/create-type-animal.dto';
import { UpdateTypeAnimalDto } from './dto/update-type-animal.dto';

@Controller('type-animal')
export class TypeAnimalController {
  constructor(private readonly typeAnimalService: TypeAnimalService) {}

  @Post()
  create(@Body() createTypeAnimalDto: CreateTypeAnimalDto) {
    return this.typeAnimalService.create(createTypeAnimalDto);
  }

  @Get()
  findAll() {
    return this.typeAnimalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeAnimalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeAnimalDto: UpdateTypeAnimalDto) {
    return this.typeAnimalService.update(+id, updateTypeAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeAnimalService.remove(+id);
  }
}
