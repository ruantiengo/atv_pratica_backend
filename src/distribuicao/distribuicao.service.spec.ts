import { Test, TestingModule } from '@nestjs/testing';
import { DistribuicaoService } from './distribuicao.service';

describe('DistribuicaoService', () => {
  let service: DistribuicaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DistribuicaoService],
    }).compile();

    service = module.get<DistribuicaoService>(DistribuicaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
