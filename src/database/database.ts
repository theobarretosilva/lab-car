import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { Motorista } from 'src/motoristas/motorista.entity';

@Injectable()
export class Database {
  private FILENAME = 'motoristas.json';

  public async getMotoristas(): Promise<Motorista[]> {
    const motoristasInFile = await readFileSync(this.FILENAME, 'utf-8');
    const motoristas = JSON.parse(motoristasInFile);
    return motoristas;
  }
}
