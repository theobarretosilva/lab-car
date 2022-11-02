import { Injectable } from '@nestjs/common';
import { Motorista } from './motorista.entity';

@Injectable()
export class MotoristasService {
  private readonly motoristas: Array<Motorista> = [];

  public getMotoristas(): Motorista[] {
    return this.motoristas;
  }

  public searchByCpf(cpf: string): Motorista {
    const motorista = this.motoristas.find((motorista) => motorista.cpf == cpf);
    return motorista;
  }

  public create(motorista: Motorista) {
    this.motoristas.push(motorista);
    return motorista;
  }
}
