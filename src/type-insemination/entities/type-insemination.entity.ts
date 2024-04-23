import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Fecundation } from 'src/fecundation/entities/fecundation.entity';

@Entity()
export class TypeInsemination {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({
    nullable: true,
  })
  name: string;
  @OneToMany(() => Fecundation, (fecundation) => fecundation.type_insemination)
  fecundation: Fecundation[];
}
