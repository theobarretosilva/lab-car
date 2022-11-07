import {
  Controller,
  Get,
  Post,
  Body,
  HttpCode,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { passageiroDatabase } from 'src/database/passageiroDatabase';
import { Viagem } from './viagens.entity';
import { ViagensService } from './viagens.service';

@Controller('viagens')
export class ViagensController {
  constructor(
    private service: ViagensService,
    private passageiroDatabase: passageiroDatabase,
  ) {}

  @Get()
  public async getViagens() {
    return await this.service.getViagens();
  }

  @Post()
  @HttpCode(201)
  public async criarViagem(@Body() viagem: Viagem): Promise<Viagem> {
    const passageiros = await this.passageiroDatabase.getPassageiros();
    const passageiroFiltrado = passageiros.find(
      (passageiro) => passageiro.cpf == viagem.idPassageiro,
    );
    if (passageiroFiltrado) {
      await this.service.addViagemPassageiro(viagem, passageiroFiltrado);
      const viagemCreated = await this.service.solicitarViagem(viagem);
      return viagemCreated;
    } else {
      throw new NotFoundException({
        statusCode: 404,
        message: 'Passageiro não encontrado!',
      });
    }
  }

  @Get(':enderecoMotorista')
  public async receberViagensProximas(
    @Param('enderecoMotorista') enderecoMotorista: string,
  ): Promise<Viagem[]> {
    return await this.service.getViagens();
  }
}
