import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TypeAnimal } from 'src/type-animal/entities/type-animal.entity';
import { Batch } from 'src/batch/entities/batch.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    type: 'integer',
  })
  number_earring: string;
  @Column()
  name: string;
  @Column()
  status: boolean;
  @ManyToOne(() => TypeAnimal, (type_animal) => type_animal.animals)
  type_animal: TypeAnimal;
  @ManyToOne(() => Batch, (batch) => batch.animals)
  batch: Batch;
}
