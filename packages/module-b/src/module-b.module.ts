import { Module } from '@nestjs/common';
import { ModuleBService } from './module-b.service';

@Module({
  imports: [],
  providers: [ModuleBService],
  exports: [ModuleBService],
})
export class ModuleBModule {}
