import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Farm } from 'src/farm/entities/farm.entity';
import { Repository } from 'typeorm';
import { dataFarm } from './farm.data';

@Injectable()
export class FarmSeederService {
  constructor(
    @InjectRepository(Farm)
    private readonly typeRepository: Repository<Farm>,
    private readonly logger: Logger,
  ) {}

  create(): Array<Promise<Farm>> {
    return dataFarm.map(async (item) => {
      return await this.typeRepository
        .findOne({
          where: {
            ...item,
          },
        })
        .then(async (dbLanguage) => {
          if (dbLanguage) {
            return Promise.resolve(null);
          }
          const create = await this.typeRepository.create(item);
          await this.typeRepository.save(create);

          this.logger.log('create data', { create });
          return Promise.resolve(create);
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
