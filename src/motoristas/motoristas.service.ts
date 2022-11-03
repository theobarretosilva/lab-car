import { Injectable } from '@nestjs/common';
import { Motorista } from './motorista.entity';

@Injectable()
export class MotoristasService {
  private readonly motoristas: Array<Motorista> = [];

  public async getMotoristas(page: number, size: number) {
    const indiceInicial = page * size;
    const indiceFinal = indiceInicial + size;

    const motoristas = await this.motoristas.get
    return this.motoristas;
  }

  public searchByCpf(cpf: string): Motorista {
    const motorista = this.motoristas.find((motorista) => motorista.cpf == cpf);
    return motorista;
  }

  public create(motorista: Motorista) {
    const birthDate = new Date(motorista.birthDate);
    const dataHoje = new Date();
    const idade: number = dataHoje.getFullYear() - birthDate.getFullYear();
    console.log(idade);

    if (idade >= 18) {
      this.motoristas.push(motorista);
      return motorista;
    } else {
      throw new Error('O motorista deve ser maior de 18 anos!');
    }
  }
}
