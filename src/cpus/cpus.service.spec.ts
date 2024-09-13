import { Test, TestingModule } from '@nestjs/testing';
import { CpusService } from './cpus.service';

describe('CpusService', () => {
  let service: CpusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpusService],
    }).compile();

    service = module.get<CpusService>(CpusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
