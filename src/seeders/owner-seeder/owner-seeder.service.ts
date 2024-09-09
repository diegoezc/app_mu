import { Injectable, Logger } from '@nestjs/common';
import { Owner } from 'src/owner/entities/owner.entity';
import { dataOwner } from './owner.data';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OwnerSeederService {
  constructor(
    @InjectRepository(Owner)
    private readonly typeRepository: Repository<Owner>,
    private readonly logger: Logger,
  ) {}

  create(): Array<Promise<Owner>> {
    return dataOwner.map(async (item) => {
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
