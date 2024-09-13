import { Mutation, Query, Resolver } from '@nestjs/graphql';

import { PcsService } from './pcs.service';
import { PC } from './entities/pc.entity';

@Resolver((of) => PC)
export class PcsResolver {
  constructor(private pcsService: PcsService) {}

  @Query((returns) => [PC])
  async getAllPcs() {
    return this.pcsService.findAll();
  }

  @Mutation((returns) => PC)
  async addPc() {
    // const pc = new PC();
    // pc.cpu = 'AMD Ryzen 5 5600';
    // pc.cpuCooler = 'DeepCool';
    // pc.ram = 'HyperX Fury';
    // pc.motherboard = 'AsRock Pg Riptide B550M';
    // pc.gpu = 'MSI Geforce GTX 1060 3gb';
    // pc.powerUnit = 'beQuiet System Power 600W';
    // pc.ssd = 'Kingston A200';
    // pc.case = 'DeepCool';
    // return this.pcsService.add(pc);
  }
}
