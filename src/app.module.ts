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
      entities: [PC, Cpu],
      synchronize: true,
    }),
    PcsModule,
    CpusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
