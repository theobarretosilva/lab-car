import { Injectable } from '@nestjs/common';
import { passageiroDatabase } from 'src/database/passageiroDatabase';
import { viagensDatabase } from 'src/database/viagensDatabase';
import { Viagem } from './viagens.entity';

@Injectable()
export class ViagensService {
  constructor(
    private database: viagensDatabase,
    private passageiroDatabase: passageiroDatabase,
  ) {}

  public async getViagens() {
    const viagens = await this.database.getViagens();
    return viagens;
  }

  public async solicitarViagem(viagem: Viagem): Promise<Viagem> {
    await this.database.gravar(viagem);
    return viagem;
  }

  public async addViagemPassageiro(viagem: Viagem) {}
}
