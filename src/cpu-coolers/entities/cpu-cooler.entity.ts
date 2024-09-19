import { Field, ID, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Socket, Type } from '../enums/cpu-coolers.enum';
import { PC } from 'src/pcs/entities/pc.entity';

registerEnumType(Socket, {
  name: 'Socket',
  description: 'Sockets cooler is compatible with',
});

registerEnumType(Type, {
  name: 'Type',
  description: 'Water or air cooler',
});

@ObjectType()
@Entity()
export class CpuCooler {
  @Field((type) => ID, { description: 'CPU Cooler ID' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @OneToMany((type) => PC, (pc) => pc.cpuCooler, {
    cascade: true,
    nullable: true,
  })
  @Field((type) => [PC], {
    description: 'PCs the CPU Cooler is associated with',
    nullable: true,
  })
  pcs?: PC[];
}
