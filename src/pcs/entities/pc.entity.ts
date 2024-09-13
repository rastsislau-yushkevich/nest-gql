import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Cpu } from 'src/cpus/entities/cpu.entity';

@Entity()
export class PC {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne((type) => Cpu, (cpu) => cpu.pcs)
  cpu: Cpu;

  @Column()
  cpuCooler: string;

  @Column()
  ram: string;

  @Column()
  motherboard: string;

  @Column({ nullable: true })
  gpu?: string;

  @Column()
  powerUnit: string;

  @Column({ nullable: true })
  ssd?: string;

  @Column({ nullable: true })
  hdd?: string;

  @Column()
  case: string;

  @Column({ nullable: true })
  opticalDrive?: string;
}
