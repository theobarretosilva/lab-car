import { Injectable } from '@nestjs/common';

@Injectable()
export class MotoristasService {
  private readonly motoristas = [];

  public getMotoristas() {
    return this.motoristas;
  }

  public create(motorista) {
    this.motoristas.push(motorista);
    return motorista;
  }
}
