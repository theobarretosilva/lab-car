import { Controller, Get } from '@nestjs/common';

@Controller('viagens')
export class ViagensController {
  @Get()
  public getAll(): string {
    return 'Viagens';
  }
}
