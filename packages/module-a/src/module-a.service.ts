import { ModuleBService } from '@company/module-b';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ModuleAService {
  constructor(private readonly moduleBService: ModuleBService) {
    console.log('ModuleAService instantiated');
  }

  public getHello(): string {
    const helloB = this.moduleBService.getHello();
    return `Hello from ModuleAService and ${helloB}`;
  }
}
