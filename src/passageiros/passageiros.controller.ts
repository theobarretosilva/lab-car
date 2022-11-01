import { Controller, Get } from '@nestjs/common';

@Controller('passageiros')
export class PassageirosController {
  @Get()
  public getAll(): string {
    return 'Passageiros';
  }
}
