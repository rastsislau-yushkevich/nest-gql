import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PC {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cpu: string;

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
