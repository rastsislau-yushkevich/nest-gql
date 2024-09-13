import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { PC } from 'src/pcs/entities/pc.entity';

@Entity()
export class Cpu {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  manufacturer: string;

  @Column()
  series: string;

  @Column()
  model: string;

  @Column()
  releaseYear: number;

  @Column()
  cores: number;

  @Column()
  threads: number;

  @Column()
  frequency: string;

  @Column()
  tdp: number;

  @OneToMany((type) => PC, (pc) => pc.cpu, { cascade: true })
  pcs: PC[];
}
