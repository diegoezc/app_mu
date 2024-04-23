import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FecundationService } from './fecundation.service';
import { CreateFecundationDto } from './dto/create-fecundation.dto';
import { UpdateFecundationDto } from './dto/update-fecundation.dto';

@Controller('fecundation')
export class FecundationController {
  constructor(private readonly fecundationService: FecundationService) {}

  @Post()
  create(@Body() createFecundationDto: CreateFecundationDto) {
    return this.fecundationService.create(createFecundationDto);
  }

  @Get()
  findAll() {
    return this.fecundationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fecundationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFecundationDto: UpdateFecundationDto) {
    return this.fecundationService.update(+id, updateFecundationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fecundationService.remove(+id);
  }
}
