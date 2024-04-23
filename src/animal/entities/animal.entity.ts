import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TypeAnimal } from 'src/type-animal/entities/type-animal.entity';
import { Batch } from 'src/batch/entities/batch.entity';
import { WeightHistory } from 'src/weight-history/entities/weight-history.entity';
import { Vaccine } from 'src/vaccine/entities/vaccine.entity';
import { Palpated } from 'src/palpated/entities/palpated.entity';
import { Fecundation } from 'src/fecundation/entities/fecundation.entity';
import { Milk } from 'src/milk/entities/milk.entity';
import { Birth } from 'src/births/entities/birth.entity';
import { EmptyMu } from 'src/empty_mu/entities/empty_mu.entity';

@Entity()
export class Animal {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    length: 10,
    nullable: true,
  })
  number_earring: string;
  @Column({
    length: 20,
    nullable: true,
  })
  name: string;
  @Column({
    length: 30,
    nullable: true,
  })
  status: string;
  @ManyToOne(() => TypeAnimal, (type_animal) => type_animal.animals)
  type_animal: TypeAnimal;
  @ManyToOne(() => Batch, (batch) => batch.animals)
  batch: Batch;
  @OneToMany(() => WeightHistory, (weightHistory) => weightHistory.animal)
  weightHistory: WeightHistory[];
  @OneToMany(() => Vaccine, (vaccine) => vaccine.animal)
  vaccine: Vaccine[];
  @OneToMany(() => Palpated, (palpated) => palpated.animal)
  palpated: Palpated[];
  @OneToMany(() => Fecundation, (fecundation) => fecundation.animal)
  fecundation: Fecundation[];
  @OneToMany(() => Milk, (milk) => milk.animal)
  milk: Milk[];
  @OneToMany(() => Birth, (birth) => birth.animal)
  birth: Birth[];
  @OneToMany(() => EmptyMu, (emptyMu) => emptyMu.animal)
  emptyMu: EmptyMu[];
}
