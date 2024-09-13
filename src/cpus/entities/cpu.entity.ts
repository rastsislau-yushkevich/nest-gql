import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { PC } from 'src/pcs/entities/pc.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Cpu {
  @Field({ description: 'CPU Manufacturer' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ description: 'CPU Series' })
  @Column()
  manufacturer: string;

  @Field({ description: 'CPU Model' })
  @Column()
  series: string;

  @Field((type) => Int, { description: 'CPU Release Date' })
  @Column()
  model: string;

  @Field((type) => Int, { description: 'CPU Cores amount' })
  @Column()
  releaseYear: number;

  @Field((type) => Int, { description: 'CPU Threads amount' })
  @Column()
  cores: number;

  @Field({ description: 'CPU frequency' })
  @Column()
  threads: number;

  @Field({ description: 'CPU frequency' })
  @Column()
  frequency: string;

  @Field((type) => Int, { description: 'CPU TDP' })
  @Column()
  tdp: number;

  @OneToMany((type) => PC, (pc) => pc.cpu, { cascade: true, nullable: true })
  @Field((type) => [PC], { description: 'CPU TDP', nullable: true })
  pcs?: PC[];
}
