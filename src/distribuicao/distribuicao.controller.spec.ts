import { Test, TestingModule } from '@nestjs/testing';
import { DistribuicaoController } from './distribuicao.controller';
import { DistribuicaoService } from './distribuicao.service';

describe('DistribuicaoController', () => {
  let controller: DistribuicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DistribuicaoController],
      providers: [DistribuicaoService],
    }).compile();

    controller = module.get<DistribuicaoController>(DistribuicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
