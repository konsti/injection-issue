import { ModuleAService } from '@company/module-a';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  public constructor(private readonly moduleAService: ModuleAService) {}

  public onApplicationBootstrap() {
    console.log('AppService instantiated');
    console.log(this.moduleAService.getHello());
  }

  getHello(): string {
    return 'Hello World!';
  }
}
