import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Cpu } from 'src/cpus/entities/cpu.entity';
import { CpuCooler } from 'src/cpu-coolers/entities/cpu-cooler.entity';

@ObjectType()
@Entity()
export class PC {
  @Field((type) => ID, { description: 'PC ID' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field((type) => Cpu, { description: 'CPU' })
  @ManyToOne((type) => Cpu, (cpu) => cpu.pcs)
  cpu: Cpu;

  @Field((type) => ID, { description: 'CPU ID' })
  @Column()
  cpuId: string;

  @Field((type) => CpuCooler, { description: 'CPU Cooler' })
  @ManyToOne((type) => CpuCooler, (cpuCooler) => cpuCooler.pcs)
  cpuCooler: CpuCooler;

  @Field((type) => ID, { description: 'CPU cooler ID' })
  @Column()
  cpuCoolerId: string;

  @Field({ description: 'RAM' })
  @Column()
  ram: string;

  @Field({ description: 'Motherboard' })
  @Column()
  motherboard: string;

  @Field({ description: 'GPU', nullable: true })
  @Column({ nullable: true })
  gpu?: string;

  @Field({ description: 'Power Unit' })
  @Column()
  powerUnit: string;

  @Field({ description: 'Solid state drive', nullable: true })
  @Column({ nullable: true })
  ssd?: string;

  @Field({ description: 'Hard drive disk', nullable: true })
  @Column({ nullable: true })
  hdd?: string;

  @Field({ description: 'PC case' })
  @Column()
  case: string;

  @Field({ description: 'Optical drive', nullable: true })
  @Column({ nullable: true })
  opticalDrive?: string;
}
