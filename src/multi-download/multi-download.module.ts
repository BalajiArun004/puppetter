import { Module } from '@nestjs/common';
import { MultiDownloadController } from './multi-download.controller';

@Module({
  controllers: [MultiDownloadController]
})
export class MultiDownloadModule {}
