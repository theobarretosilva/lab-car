import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import { Motorista } from 'src/motoristas/motorista.entity';

@Injectable()
export class Database {
  private FILENAME = 'motoristas.json';

  public async getMotoristas(): Promise<Motorista[]> {
    const motoristasInFile = await readFileSync(this.FILENAME, 'utf-8');
    const motoristas = JSON.parse(motoristasInFile);
    return motoristas;
  }

  public async gravar(motorista: Motorista) {
    let motoristas = await this.getMotoristas();
    if (!motoristas) {
      motoristas = [];
    }
    writeFileSync(this.FILENAME, JSON.stringify([...motoristas, motorista]));
  }

  public async gravarMotorista(motoristas: Motorista[]) {
    writeFileSync(this.FILENAME, JSON.stringify(motoristas));
  }
}
