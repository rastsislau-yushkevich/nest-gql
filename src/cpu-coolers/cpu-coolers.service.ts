import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CpuCooler } from './entities/cpu-cooler.entity';
import { AddCpuCoolerInput } from './inputs/cpu-coolers.inputs';

@Injectable()
export class CpuCoolersService {
  constructor(
    @InjectRepository(CpuCooler)
    private cpuCoolersRepository: Repository<CpuCooler>,
  ) {}

  async getAll() {
    return await this.cpuCoolersRepository.find();
  }

  async add(addCpuCoolerInput: AddCpuCoolerInput) {
    return await this.cpuCoolersRepository.save(addCpuCoolerInput);
  }
}
