// cadastrar - create
// listar varios - findAll
// listar 1 elemento só = find
// atualizar elementos - update
// deletar elemento - destroy

import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Motorista } from './motorista.entity';
import { MotoristasService } from './motoristas.service';

@Controller('motoristas')
export class MotoristasController {
  constructor(private service: MotoristasService) {}

  @Get()
  public findAll(
    @Query('page') page: number,
    @Query('size') size: number,
  ): Array<Motorista> {
    console.log(page);
    console.log(size);
    return this.service.getMotoristas();
  }

  @Get(':cpf')
  public getMotoristaByCPF(@Param('cpf') cpf: string): Motorista {
    const motorista = this.service.searchByCpf(cpf);
    return motorista;
  }

  @Post()
  public create(@Body() motorista: Motorista): Motorista {
    const motoristaCreated = this.service.create(motorista);
    return motoristaCreated;
  }
}
