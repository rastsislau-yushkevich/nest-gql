import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CpusResolver } from './cpus.resolver';
import { Cpu } from './entities/cpu.entity';
import { CpusService } from './cpus.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cpu])],
  providers: [CpusResolver, CpusService],
})
export class CpusModule {}
