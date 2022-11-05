import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import { Passageiro } from 'src/passageiros/passageiros.entity';

@Injectable()
export class passageiroDatabase {
  private FILENAME = 'passageiros.json';

  public async getPassageiros(): Promise<Passageiro[]> {
    const passageirosInFile = await readFileSync(this.FILENAME, 'utf-8');
    const passageiros = JSON.parse(passageirosInFile);
    return passageiros;
  }

  public async gravar(passageiro: Passageiro) {
    let passageiros = await this.getPassageiros();
    if (!passageiros) {
      passageiros = [];
    }
    writeFileSync(this.FILENAME, JSON.stringify([...passageiros, passageiro]));
  }

  public async gravarPassageiro(passageiros: Passageiro[]) {
    writeFileSync(this.FILENAME, JSON.stringify(passageiros));
  }
}
