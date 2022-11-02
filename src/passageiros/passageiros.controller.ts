// cadastrar - create
// listar varios - findAll
// listar 1 elemento só = find
// atualizar elementos - update
// deletar elemento - destroy

import { Body, Controller, Get, Post } from '@nestjs/common';
import { PassageirosService } from './passageiros.service';

@Controller('passageiros')
export class PassageirosController {
  constructor(private passageiroService: PassageirosService) {}

  @Get()
  public getAll() {
    return this.passageiroService.getPassageiros();
  }

  @Post()
  public create(@Body() passageiro) {
    const passageiroCreated = this.passageiroService.create(passageiro);
    return passageiroCreated;
  }
}
