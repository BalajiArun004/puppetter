import { Test, TestingModule } from '@nestjs/testing';
import { MultiDownloadController } from './multi-download.controller';

describe('MultiDownloadController', () => {
  let controller: MultiDownloadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MultiDownloadController],
    }).compile();

    controller = module.get<MultiDownloadController>(MultiDownloadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
