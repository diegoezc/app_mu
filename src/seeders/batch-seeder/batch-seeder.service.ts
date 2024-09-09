import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Batch } from 'src/batch/entities/batch.entity';
import { Repository } from 'typeorm';
import { dataBatch } from './batch.data';

@Injectable()
export class BatchSeederService {
  constructor(
    @InjectRepository(Batch)
    private readonly typeRepository: Repository<Batch>,
    private readonly logger: Logger,
  ) {}

  create(): Array<Promise<Batch>> {
    return dataBatch.map(async (item) => {
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
