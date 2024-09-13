import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { PC } from 'src/pcs/models/pc.model';

@ObjectType()
export class Cpu {
  @Field((type) => ID, { description: 'CPU ID' })
  id: string;

  @Field({ description: 'CPU Manufacturer' })
  manufacturer: string;

  @Field({ description: 'CPU Series' })
  series: string;

  @Field({ description: 'CPU Model' })
  model: string;

  @Field((type) => Int, { description: 'CPU Release Date' })
  releaseYear: number;

  @Field((type) => Int, { description: 'CPU Cores amount' })
  cores: number;

  @Field((type) => Int, { description: 'CPU Threads amount' })
  threads: number;

  @Field({ description: 'CPU frequency' })
  frequency: string;

  @Field((type) => Int, { description: 'CPU TDP' })
  tdp: number;

  @Field((type) => [PC], { nullable: true })
  pcs?: PC[];
}
