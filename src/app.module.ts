import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnerModule } from './owner/owner.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseSource } from 'db/data-source';
import { FarmModule } from './farm/farm.module';

@Module({
  imports: [TypeOrmModule.forRoot(databaseSource), OwnerModule, FarmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
