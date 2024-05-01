import { Test, TestingModule } from '@nestjs/testing';
import { CreaturesService } from './creatures.service';

describe('CreaturesService', () => {
  let service: CreaturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreaturesService],
    }).compile();

    service = module.get<CreaturesService>(CreaturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
