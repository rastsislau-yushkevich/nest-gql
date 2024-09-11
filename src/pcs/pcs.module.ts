import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PcsResolver } from './pcs.resolver';
import { PcsService } from './pcs.service';
import { PC } from './entities/pc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PC])],
  providers: [PcsResolver, PcsService],
})
export class PcsModule {}
