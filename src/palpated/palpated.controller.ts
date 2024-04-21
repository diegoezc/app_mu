import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PalpatedService } from './palpated.service';
import { CreatePalpatedDto } from './dto/create-palpated.dto';
import { UpdatePalpatedDto } from './dto/update-palpated.dto';

@Controller('palpated')
export class PalpatedController {
  constructor(private readonly palpatedService: PalpatedService) {}

  @Post()
  create(@Body() createPalpatedDto: CreatePalpatedDto) {
    return this.palpatedService.create(createPalpatedDto);
  }

  @Get()
  findAll() {
    return this.palpatedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palpatedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePalpatedDto: UpdatePalpatedDto) {
    return this.palpatedService.update(+id, updatePalpatedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palpatedService.remove(+id);
  }
}
