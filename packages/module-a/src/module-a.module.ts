import { ModuleBModule } from '@company/module-b';
import { Module } from '@nestjs/common';
import { ModuleAService } from './module-a.service';

@Module({
  imports: [ModuleBModule],
  providers: [ModuleAService],
  exports: [ModuleAService],
})
export class ModuleAModule {}
