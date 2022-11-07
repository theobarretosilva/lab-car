import { Injectable } from '@nestjs/common';
import { passageiroDatabase } from 'src/database/passageiroDatabase';
import { viagensDatabase } from 'src/database/viagensDatabase';
import { PassageirosController } from 'src/passageiros/passageiros.controller';
import { Passageiro } from 'src/passageiros/passageiros.entity';
import { Viagem } from './viagens.entity';

@Injectable()
export class ViagensService {
  constructor(
    private database: viagensDatabase,
    private passageiroDatabase: passageiroDatabase,
    private passageiroController: PassageirosController,
  ) {}

  public async getViagens() {
    const viagens = await this.database.getViagens();
    return viagens;
  }

  public async solicitarViagem(viagem: Viagem): Promise<Viagem> {
    await this.database.gravar(viagem);
    return viagem;
  }

  public async addViagemPassageiro(viagem: Viagem, passageiro: Passageiro) {
    passageiro.viagens.push(viagem);
    await this.passageiroController.deletePassageiro(passageiro.cpf);
    await this.passageiroDatabase.gravar(passageiro);
  }
}
