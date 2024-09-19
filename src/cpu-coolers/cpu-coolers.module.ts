import { Module } from '@nestjs/common';
import { CpuCoolersResolver } from './cpu-coolers.resolver';
import { CpuCoolersService } from './cpu-coolers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CpuCooler } from './entities/cpu-cooler.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CpuCooler])],
  providers: [CpuCoolersResolver, CpuCoolersService],
})
export class CpuCoolersModule {}
