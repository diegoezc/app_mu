import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeInseminationService } from './type-insemination.service';
import { CreateTypeInseminationDto } from './dto/create-type-insemination.dto';
import { UpdateTypeInseminationDto } from './dto/update-type-insemination.dto';

@Controller('type-insemination')
export class TypeInseminationController {
  constructor(private readonly typeInseminationService: TypeInseminationService) {}

  @Post()
  create(@Body() createTypeInseminationDto: CreateTypeInseminationDto) {
    return this.typeInseminationService.create(createTypeInseminationDto);
  }

  @Get()
  findAll() {
    return this.typeInseminationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typeInseminationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeInseminationDto: UpdateTypeInseminationDto) {
    return this.typeInseminationService.update(+id, updateTypeInseminationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typeInseminationService.remove(+id);
  }
}
