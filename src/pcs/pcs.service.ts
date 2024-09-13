import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PC } from './entities/pc.entity';
import { AddPcInput } from './inputs/pc.inputs';

@Injectable()
export class PcsService {
  constructor(
    @InjectRepository(PC)
    private pcsRepository: Repository<PC>,
  ) {}

  async add(addPcData: AddPcInput) {
    return this.pcsRepository.save(addPcData);
  }

  async findAll() {
    return await this.pcsRepository.find();
  }
}
