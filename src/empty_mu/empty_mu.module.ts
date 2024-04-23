import { Module } from '@nestjs/common';
import { EmptyMuService } from './empty_mu.service';
import { EmptyMuController } from './empty_mu.controller';

@Module({
  controllers: [EmptyMuController],
  providers: [EmptyMuService],
})
export class EmptyMuModule {}
