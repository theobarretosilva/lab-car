import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Passageiro } from './passageiros.entity';
import { PassageirosService } from './passageiros.service';

@Controller('passageiros')
export class PassageirosController {
  constructor(private service: PassageirosService) {}

  @Get()
  public async findPassageiro(
    @Query('page') page = 0,
    @Query('size') size = 10,
    @Query('name') name: string,
  ) {
    return await this.service.getPassageiros(page, size, name);
  }

  @Get(':cpf')
  public async getPassageiroByCpf(@Param('cpf') cpf: string) {
    const passageiro = await this.service.searchByCpf(cpf);

    if (!passageiro) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Passageiro não encontrado',
      });
    }
    return passageiro;
  }

  @Post()
  public async createPassageiro(
    @Body() passageiro: Passageiro,
  ): Promise<Passageiro> {
    const passageiroCreated = await this.service.criarPassageiro(passageiro);
    return passageiroCreated;
  }

  @Put(':cpf')
  public async updatePassageiro(
    @Param('cpf') cpf: string,
    @Body() passageiro: Passageiro,
  ) {
    if (!passageiro) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Passageiro não encontrado',
      });
    } else {
      await this.service.apagarPassageiro(cpf);
      return await this.service.criarPassageiro(passageiro);
    }
  }

  @Delete(':cpf')
  @HttpCode(200)
  public async deletePassageiro(@Param('cpf') cpf: string) {
    const passageiro = await this.service.searchByCpf(cpf);

    if (!passageiro) {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Passageiro não encontrado',
      });
    } else if (passageiro.viagens.length == 0) {
      await this.service.apagarPassageiro(cpf);
    }
  }
}
