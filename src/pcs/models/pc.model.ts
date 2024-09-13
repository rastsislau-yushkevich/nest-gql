import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Cpu } from 'src/cpus/models/cpu.model';

@ObjectType()
export class PC {
  @Field((type) => ID, { description: 'PC ID' })
  id: string;

  @Field((type) => Cpu, { description: 'CPU' })
  cpu: Cpu;

  @Field({ description: 'CPU Cooler' })
  cpuCooler: string;

  @Field({ description: 'RAM' })
  ram: string;

  @Field({ description: 'Motherboard' })
  motherboard: string;

  @Field({ description: 'GPU', nullable: true })
  gpu?: string;

  @Field({ description: 'Power Unit' })
  powerUnit: string;

  @Field({ description: 'Solid state drive', nullable: true })
  ssd?: string;

  @Field({ description: 'Hard drive disk', nullable: true })
  hdd?: string;

  @Field({ description: 'PC case' })
  case: string;

  @Field({ description: 'Optical drive', nullable: true })
  opticalDrive?: string;
}
