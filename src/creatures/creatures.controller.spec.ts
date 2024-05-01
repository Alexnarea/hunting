import { Test, TestingModule } from '@nestjs/testing';
import { CreaturesController } from './creatures.controller';
import { CreaturesService } from './creatures.service';

describe('CreaturesController', () => {
  let controller: CreaturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreaturesController],
      providers: [CreaturesService],
    }).compile();

    controller = module.get<CreaturesController>(CreaturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
