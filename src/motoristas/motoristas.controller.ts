// cadastrar - create
// listar varios - findAll
// listar 1 elemento só = find
// atualizar elementos - update
// deletar elemento - destroy

import { Body, Controller, Get, Post } from '@nestjs/common';
import { MotoristasService } from './motoristas.service';

@Controller('motoristas')
export class MotoristasController {
  constructor(private motoristaService: MotoristasService) {}

  @Get()
  public findAll() {
    return this.motoristaService.getMotoristas();
  }

  // @Get()
  // public find() {
  //   return 'Detalhes motorista';
  // }

  @Post()
  public create(@Body() motorista) {
    const motoristaCreated = this.motoristaService.create(motorista);
    return motoristaCreated;
  }
}
