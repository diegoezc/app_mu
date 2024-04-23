import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Animal } from 'src/animal/entities/animal.entity';
import { TypeInsemination } from 'src/type-insemination/entities/type-insemination.entity';

@Entity()
export class Fecundation {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  incemination: boolean;
  @Column({
    type: 'date',
  })
  date: string;
  @ManyToOne(() => Animal, (animal) => animal.fecundation)
  animal: Animal;
  @ManyToOne(
    () => TypeInsemination,
    (type_insemination) => type_insemination.fecundation,
  )
  type_insemination: TypeInsemination;
}
