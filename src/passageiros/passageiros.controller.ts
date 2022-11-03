// cadastrar - create
// listar varios - findAll
// listar 1 elemento só = find
// atualizar elementos - update
// deletar elemento - destroy

import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { Passageiro } from './passageiros.entity';
import { PassageirosService } from './passageiros.service';

@Controller('passageiros')
export class PassageirosController {
  constructor(private service: PassageirosService) {}

  @Get()
  public findAll() {
    return this.service.getPassageiros();
  }

  @Get(':cpf')
  public getPassageiroByCpf(@Param('cpf') cpf: string): Passageiro {
    const passageiro = this.service.searchPassageiroByCpf(cpf);
    return passageiro;
  }

  @Post()
  public create(@Body() passageiro) {
    const passageiroCreated = this.service.create(passageiro);
    return passageiroCreated;
  }
}
