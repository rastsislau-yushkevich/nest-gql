import { Field, InputType, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';

import { Socket, Type } from '../enums/cpu-coolers.enum';

@InputType()
export class AddCpuCoolerInput {
  @Field({ description: 'Brand of the CPU cooler' })
  @Column()
  brand: string;

  @Field({ description: 'Model of the CPU cooler' })
  @Column()
  model: string;

  @Field((type) => Int, { description: 'Amount of head dissipated' })
  @Column()
  tdp: number;

  @Field((type) => Int, { description: 'Cooler height' })
  @Column()
  height: number;

  @Field((type) => [Socket], { description: 'Motherboard socket type' })
  @Column({
    type: 'enum',
    enum: Socket,
    array: true,
  })
  sockets: Socket[];

  @Field((type) => Int, { description: 'Fan diameter for the cooler' })
  @Column()
  fanSize: number;

  @Field((type) => Int, { description: 'Fan speed' })
  @Column()
  fanSpeed: number;

  @Field((type) => Type, { description: 'Water or air cooler' })
  @Column({
    type: 'enum',
    enum: Type,
  })
  type: Type;

  @Field((type) => Int, { description: 'Noise level' })
  @Column()
  noiseLevel: number;
}
