import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DoseService } from './dose.service';
import { CreateDoseDto } from './dto/create-dose.dto';
import { UpdateDoseDto } from './dto/update-dose.dto';

@Controller('dose')
export class DoseController {
  constructor(private readonly doseService: DoseService) {}

  @Post()
  create(@Body() createDoseDto: CreateDoseDto) {
    return this.doseService.create(createDoseDto);
  }

  @Get()
  findAll() {
    return this.doseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoseDto: UpdateDoseDto) {
    return this.doseService.update(+id, updateDoseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doseService.remove(+id);
  }
}
