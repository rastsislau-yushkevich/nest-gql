import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PC } from './entities/pc.entity';

@Injectable()
export class PcsService {
  constructor(
    @InjectRepository(PC)
    private pcsRepository: Repository<PC>,
  ) {}

  add(pc: PC) {
    return this.pcsRepository.save(pc);
  }

  async findAll() {
    return await this.pcsRepository.find();
  }
}
