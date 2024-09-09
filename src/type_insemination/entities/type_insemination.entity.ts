import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Fecundation } from 'src/fecundation/entities/fecundation.entity';

@Entity()
export class TypeInsemination {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    nullable: true,
  })
  name: string;
  @CreateDateColumn({ name: 'created_at' }) 'created_at': Date;
  @UpdateDateColumn({ name: 'updated_at' }) 'updated_at': Date;
  @OneToMany(() => Fecundation, (fecundation) => fecundation.type_insemination)
  fecundation: Fecundation[];
}
