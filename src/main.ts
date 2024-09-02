import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { SeedersService } from './seeders/seeders.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Application context created.');

  const seeder = app.get(SeedersService);
  const logger = new Logger('Bootstrap');

  try {
    await seeder.seed();
    logger.debug('Seeding complete!');
  } catch (e) {
    logger.error('Seeding failed!', e);
  }
  await app.listen(3000);
}

bootstrap();
