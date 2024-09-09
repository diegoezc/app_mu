import { Injectable, Logger } from '@nestjs/common';
import { TypeAnimalSeederService } from './type-animal-seeder/type-animal-seeder.service';
import { FarmSeederService } from './farm-seeder/farm-seeder.service';
import { OwnerSeederService } from './owner-seeder/owner-seeder.service';

@Injectable()
export class SeedersService {
  constructor(
    private readonly logger: Logger,
    private readonly typeAnimalSeederService: TypeAnimalSeederService,
    private readonly farmSeederService: FarmSeederService,
    private readonly ownerSeederService: OwnerSeederService,
  ) {}

  async seed() {
    await this.seedData()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding users...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding users...');
        Promise.reject(error);
      });
  }

  async seedData() {
    return await Promise.all([
      this.typeAnimalSeederService.create(),
      this.farmSeederService.create(),
      this.ownerSeederService.create(),
    ])
      .then((created) => {
        this.logger.debug(
          'No. of type animals created : ' +
            created.filter(
              (nullValueOrCreatedLanguage) => nullValueOrCreatedLanguage,
            ).length,
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
