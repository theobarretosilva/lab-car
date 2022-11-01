import { Controller, Get } from '@nestjs/common';

@Controller('motoristas')
export class MotoristasController {
  @Get()
  public getAll(): string {
    return 'Motoristas';
  }
}
