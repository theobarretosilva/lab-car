import { Injectable } from '@nestjs/common';
import { Database } from 'src/database/database';
import { Motorista } from './motorista.entity';

@Injectable()
export class MotoristasService {
  constructor(private database: Database) {}

  public async create(motorista: Motorista): Promise<Motorista> {
    const motoristaExiste = await this.getMotoristas(motorista.cpf);
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

  public async getMotoristas(page: number, size: number) {
    const indiceInicial = page * size;
    const indiceFinal = indiceInicial + size;

    const motoristas = await this.database.getMotoristas();
    if (motoristas.length > indiceInicial) {
      if (motoristas.length > indiceFinal) {
        return motoristas.slice(indiceInicial, indiceFinal);
      } else {
        return motoristas.slice(indiceInicial, motoristas.length - 1);
      }
    } else {
      return [];
    }
  }

  public searchByCpf(cpf: string): Motorista {
    const motorista = this.motoristas.find((motorista) => motorista.cpf == cpf);
    return motorista;
  }
}
