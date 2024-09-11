import { Test, TestingModule } from '@nestjs/testing';
import { PcsResolver } from './pcs.resolver';

describe('PcsResolver', () => {
  let resolver: PcsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PcsResolver],
    }).compile();

    resolver = module.get<PcsResolver>(PcsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
