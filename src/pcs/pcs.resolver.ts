import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { PcsService } from './pcs.service';
import { PC } from './entities/pc.entity';
import { AddPcInput } from './inputs/pc.inputs';

@Resolver((of) => PC)
export class PcsResolver {
  constructor(private pcsService: PcsService) {}

  @Query((returns) => [PC])
  async getAllPcs() {
    return this.pcsService.findAll();
  }

  @Mutation((returns) => PC)
  async addPc(@Args({ name: 'addPcData' }) addPcData: AddPcInput) {
    return this.pcsService.add(addPcData);
  }
}
