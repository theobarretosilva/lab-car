import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { passageiroDatabase } from 'src/database/passageiroDatabase';
import { Passageiro } from './passageiros.entity';

@Injectable()
export class PassageirosService {
  constructor(private database: passageiroDatabase) {}

  public async getPassageiros(page: number, size: number) {
    const indiceInicial = page * size;
    const indiceFinal = indiceInicial + size;

    const passageiros = await this.database.getPassageiros();
    if (passageiros.length > indiceInicial) {
      if (passageiros.length > indiceFinal) {
        return passageiros.slice(indiceInicial, indiceFinal);
      } else {
        return passageiros.slice(indiceInicial, passageiros.length - 1);
      }
    } else {
      return [];
    }
  }

  public async searchPassageiroByCpf(cpf: string) {
    const passageiros = await this.database.getPassageiros();
    return passageiros.find((passageiro) => passageiro.cpf == cpf);
  }

  public create(passageiro) {
    this.passageiros.push(passageiro);
    return passageiro;
  }
}
