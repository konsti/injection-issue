import { Injectable } from "@nestjs/common";

@Injectable()
export class ModuleBService {
  constructor() {
    console.log('ModuleBService instantiated');
  }

  public getHello(): string {
    return 'Hello from ModuleBService';
  }
}