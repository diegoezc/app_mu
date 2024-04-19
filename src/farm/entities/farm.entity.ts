import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Batch } from 'src/batch/entities/batch.entity';

@Entity()
export class Farm {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  sector: string;
  @Column({
    type: 'float',
  })
  hectareas: number;
  @OneToMany(() => Batch, (batch) => batch.farm)
  batchs: Batch[];
}
