import { Injectable } from '@nestjs/common';
import { Passageiro } from './passageiros.entity';

@Injectable()
export class PassageirosService {
  private readonly passageiros = [];

  public getPassageiros() {
    return this.passageiros;
  }

  public searchPassageiroByCpf(cpf: string): Passageiro {
    const passageiro = this.passageiros.find(
      (passageiro) => passageiro.cpf == cpf,
    );
    return passageiro;
  }

  public create(passageiro) {
    this.passageiros.push(passageiro);
    return passageiro;
  }
}
