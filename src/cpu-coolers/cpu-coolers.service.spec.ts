import { Test, TestingModule } from '@nestjs/testing';
import { CpuCoolersService } from './cpu-coolers.service';

describe('CpuCoolersService', () => {
  let service: CpuCoolersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CpuCoolersService],
    }).compile();

    service = module.get<CpuCoolersService>(CpuCoolersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
