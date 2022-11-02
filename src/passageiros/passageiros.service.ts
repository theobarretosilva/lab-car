import { Injectable } from '@nestjs/common';

@Injectable()
export class PassageirosService {
  private readonly passageiros = [];

  public getPassageiros() {
    return this.passageiros;
  }

  public create(passageiro) {
    this.passageiros.push(passageiro);
    return passageiro;
  }
}
