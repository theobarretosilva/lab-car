import { Injectable } from '@nestjs/common';
import { Motorista } from './motorista.entity';

@Injectable()
export class MotoristasService {
  private readonly motoristas: Array<Motorista> = [];

  public getMotoristas() {
    return this.motoristas;
  }

  public create(motorista: Motorista) {
    this.motoristas.push(motorista);
    return motorista;
  }
}
