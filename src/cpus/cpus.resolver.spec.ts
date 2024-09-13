import { Test, TestingModule } from '@nestjs/testing';
import { CpusResolver } from './cpus.resolver';

describe('CpusResolver', () => {
  let resolver: CpusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpusResolver],
    }).compile();

    resolver = module.get<CpusResolver>(CpusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
