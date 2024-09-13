import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AddCpuInput } from './inputs/cpu.inputs';
import { CpusService } from './cpus.service';
import { Cpu } from './entities/cpu.entity';

@Resolver()
export class CpusResolver {
  constructor(private cpusService: CpusService) {}

  @Query((returns) => [Cpu])
  async getAllCpus() {
    return await this.cpusService.getAll();
  }

  @Mutation((returns) => Cpu)
  async addCpu(@Args({ name: 'addCpuData' }) addCpuData: AddCpuInput) {
    return await this.cpusService.addCpu(addCpuData);
  }
}
