import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Motorista } from './motorista.entity';
import { MotoristasService } from './motoristas.service';

@Controller('motoristas')
export class MotoristasController {
  constructor(private service: MotoristasService) {}

  @Get()
  public async findMotorista(
    @Query('page') page = 0,
    @Query('size') size = 10,
    @Query('name') name: string,
  ) {
    return await this.service.getMotoristas(page, size, name);
  }

  @Get(':cpf')
  public async getMotoristaByCPF(@Param('cpf') cpf: string) {
    const motorista = await this.service.searchByCpf(cpf);

    if (!motorista) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Motorista não encontrado',
      });
    }

    return motorista;
  }

  @Post()
  public async createMotorista(
    @Body() motorista: Motorista,
  ): Promise<Motorista> {
    const motoristaCreated = await this.service.criarMotorista(motorista);
    return motoristaCreated;
  }

  @Put('update/:cpf')
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  public async updateMotorista(@Param('cpf') cpf: string) {
    const motorista = await this.service.searchByCpf(cpf);
  }

  @Put('block/:cpf')
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  public async blockMotorista(@Param('cpf') cpf: string) {
    const motorista = await this.service.searchByCpf(cpf);
  }

  @Delete(':cpf')
  public async deleteMotorista(@Param('cpf') cpf: string) {
    const motorista = await this.service.searchByCpf(cpf);
  }
}
