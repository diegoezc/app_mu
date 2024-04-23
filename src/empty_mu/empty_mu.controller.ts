import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmptyMuService } from './empty_mu.service';
import { CreateEmptyMuDto } from './dto/create-empty_mu.dto';
import { UpdateEmptyMuDto } from './dto/update-empty_mu.dto';

@Controller('empty-mu')
export class EmptyMuController {
  constructor(private readonly emptyMuService: EmptyMuService) {}

  @Post()
  create(@Body() createEmptyMuDto: CreateEmptyMuDto) {
    return this.emptyMuService.create(createEmptyMuDto);
  }

  @Get()
  findAll() {
    return this.emptyMuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.emptyMuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmptyMuDto: UpdateEmptyMuDto) {
    return this.emptyMuService.update(+id, updateEmptyMuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.emptyMuService.remove(+id);
  }
}
