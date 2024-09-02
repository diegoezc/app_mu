import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeAnimal } from '../../type-animal/entities/type-animal.entity';
import { dataTypeAnimal } from './type-animals.data';
import { Repository } from 'typeorm';

@Injectable()
export class TypeAnimalSeederService {
  constructor(
    @InjectRepository(TypeAnimal)
    private readonly typeRepository: Repository<TypeAnimal>,
    private readonly logger: Logger,
  ) {}

  create(): Array<Promise<TypeAnimal>> {
    return dataTypeAnimal.map(async (item) => {
      return await this.typeRepository
        .findOne({
          where: {
            name: item.name,
          },
        })
        .then(async (dbLangauge) => {
          if (dbLangauge) {
            return Promise.resolve(null);
          }
          const create = await this.typeRepository.create(item);
          await this.typeRepository.save(create);

          this.logger.log('Create data', { create });
          return Promise.resolve(create);
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
