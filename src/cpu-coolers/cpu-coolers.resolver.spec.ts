import { Test, TestingModule } from '@nestjs/testing';
import { CpuCoolersResolver } from './cpu-coolers.resolver';

describe('CpuCoolersResolver', () => {
  let resolver: CpuCoolersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpuCoolersResolver],
    }).compile();

    resolver = module.get<CpuCoolersResolver>(CpuCoolersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
