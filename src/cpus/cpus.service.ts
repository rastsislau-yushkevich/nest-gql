import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cpu } from './entities/cpu.entity';
import { AddCpuInput } from './inputs/cpu.inputs';

@Injectable()
export class CpusService {
  constructor(
    @InjectRepository(Cpu)
    private cpusRepository: Repository<Cpu>,
  ) {}

  async getAll() {
    return await this.cpusRepository.find();
  }

  async addCpu(addCpuInput: AddCpuInput) {
    return await this.cpusRepository.save(addCpuInput);
  }
}
