import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BirthsService } from './births.service';
import { CreateBirthDto } from './dto/create-birth.dto';
import { UpdateBirthDto } from './dto/update-birth.dto';

@Controller('births')
export class BirthsController {
  constructor(private readonly birthsService: BirthsService) {}

  @Post()
  create(@Body() createBirthDto: CreateBirthDto) {
    return this.birthsService.create(createBirthDto);
  }

  @Get()
  findAll() {
    return this.birthsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.birthsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBirthDto: UpdateBirthDto) {
    return this.birthsService.update(+id, updateBirthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.birthsService.remove(+id);
  }
}
