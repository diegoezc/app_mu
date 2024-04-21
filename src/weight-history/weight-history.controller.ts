import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WeightHistoryService } from './weight-history.service';
import { CreateWeightHistoryDto } from './dto/create-weight-history.dto';
import { UpdateWeightHistoryDto } from './dto/update-weight-history.dto';

@Controller('weight-history')
export class WeightHistoryController {
  constructor(private readonly weightHistoryService: WeightHistoryService) {}

  @Post()
  create(@Body() createWeightHistoryDto: CreateWeightHistoryDto) {
    return this.weightHistoryService.create(createWeightHistoryDto);
  }

  @Get()
  findAll() {
    return this.weightHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weightHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeightHistoryDto: UpdateWeightHistoryDto) {
    return this.weightHistoryService.update(+id, updateWeightHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weightHistoryService.remove(+id);
  }
}
