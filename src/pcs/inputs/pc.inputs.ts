import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddPcInput {
  @Field({ description: 'CPU' })
  cpuId: string;

  @Field({ description: 'CPU cooler' })
  cpuCoolerId: string;

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
