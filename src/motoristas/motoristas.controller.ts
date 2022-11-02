// cadastrar - create
// listar varios - findAll
// listar 1 elemento só = find
// atualizar elementos - update
// deletar elemento - destroy

import { Body, Controller, Get, Post } from '@nestjs/common';
import { Motorista } from './motorista.entity';
import { MotoristasService } from './motoristas.service';

@Controller('motoristas')
export class MotoristasController {
  constructor(private motoristaService: MotoristasService) {}

  @Get()
  public findAll(): Array<Motorista> {
    return this.motoristaService.getMotoristas();
  }

  // @Get()
  // public find() {
  //   return 'Detalhes motorista';
  // }

  @Post()
  public create(@Body() motorista: Motorista): Motorista {
    const motoristaCreated = this.motoristaService.create(motorista);
    return motoristaCreated;
  }
}
