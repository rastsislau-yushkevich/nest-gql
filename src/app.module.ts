import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PcsModule } from './pcs/pcs.module';
import { PC } from './pcs/entities/pc.entity';
import { Cpu } from './cpus/entities/cpu.entity';
import { CpusModule } from './cpus/cpus.module';
import { CpuCoolersModule } from './cpu-coolers/cpu-coolers.module';
import { CpuCooler } from './cpu-coolers/entities/cpu-cooler.entity';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'pcs_db',
      entities: [PC, Cpu, CpuCooler],
      synchronize: true,
    }),
    PcsModule,
    CpusModule,
    CpuCoolersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
