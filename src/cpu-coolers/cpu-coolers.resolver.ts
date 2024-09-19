import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CpuCoolersService } from './cpu-coolers.service';
import { CpuCooler } from './entities/cpu-cooler.entity';
import { AddCpuCoolerInput } from './inputs/cpu-coolers.inputs';

@Resolver()
export class CpuCoolersResolver {
  constructor(private cpuCoolersService: CpuCoolersService) {}

  @Query((returns) => [CpuCooler])
  async getAllCpuCoolers() {
    return await this.cpuCoolersService.getAll();
  }

  @Mutation((returns) => CpuCooler)
  async addCpuCooler(
    @Args({ name: 'addCpuCoolerInput' }) addCpuCoolerInput: AddCpuCoolerInput,
  ) {
    return await this.cpuCoolersService.add(addCpuCoolerInput);
  }
}
