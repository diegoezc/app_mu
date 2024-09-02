import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SeedersModule } from './seeders/seeders.module';
import { SeedersService } from './seeders/seeders.service';

async function bootstrap() {
  console.log('Starting seeder...');

  try {
    const appContext =
      await NestFactory.createApplicationContext(SeedersModule);
    console.log('Application context created.');

    const logger = appContext.get(Logger);
    const seeder = appContext.get(SeedersService);
    console.log('Seeder instance retrieved.');

    try {
      await seeder.seed();
      logger.debug('Seeding complete!');
    } catch (error) {
      logger.error('Seeding failed!', error);
      throw error;
    } finally {
      console.log('Closing application context...');
      await appContext.close();
      console.log('Application context closed.');
    }
  } catch (error) {
    console.error('Failed to bootstrap the seeder application', error);
    process.exit(1); // Termina el proceso con un código de error
  }
}

bootstrap()
  .then(() => {
    console.log('Seeder script finished execution.');
  })
  .catch((error) => {
    console.error('Seeder script encountered an error:', error);
  });
