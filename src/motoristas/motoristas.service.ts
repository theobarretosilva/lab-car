import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { motoristaDatabase } from 'src/database/motoristasDatabase';
import { Motorista } from './motorista.entity';

@Injectable()
export class MotoristasService {
  constructor(private database: motoristaDatabase) {}

  public async getMotoristas(page: number, size: number, name: string) {
    const indiceInicial = page * size;
    const indiceFinal = indiceInicial + size;

    const motoristas = await this.database.getMotoristas();
    // if (page && size) {
    if (motoristas.length > indiceInicial) {
      if (motoristas.length > indiceFinal) {
        return motoristas.slice(indiceInicial, indiceFinal);
      } else {
        return motoristas.slice(indiceInicial, motoristas.length - 1);
      }
    } else {
      return [];
    }
    // } else if (name) {
    //   const newFilter = motoristas.filter((value) => {
    //     return value.name.toLowerCase().includes(name);
    //   });
    //   return newFilter;
    // } else {
    //   return motoristas;
    // }
  }

  public async searchByCpf(cpf: string) {
    const motoristas = await this.database.getMotoristas();
    return motoristas.find((motorista) => motorista.cpf == cpf);
  }

  public async criarMotorista(motorista: Motorista): Promise<Motorista> {
    const motoristaExiste = await this.searchByCpf(motorista.cpf);
    const birthDate = new Date(motorista.birthDate);
    const dataHoje = new Date();
    const idade: number = dataHoje.getFullYear() - birthDate.getFullYear();

    if (idade >= 18) {
      if (motoristaExiste) {
        throw new ConflictException({
          statusCode: 409,
          message: 'Este motorista já está cadastrado',
        });
      }
      await this.database.gravar(motorista);
      return motorista;
    } else {
      throw new BadRequestException({
        statusCode: 400,
        message:
          'O motorista deve ser maior de 18 anos! Idade fornecida: ' + idade,
      });
    }
  }

  public async blockUnblockMotorista(cpf: string, body) {
    const motoristas = await this.database.getMotoristas();
    const motoristaFiltrado = motoristas.find(
      (motorista) => motorista.cpf == cpf,
    );
    motoristaFiltrado.blocked = body.blocked;
    await this.apagarMotorista(cpf);
    await this.database.gravarMotorista(motoristas);
  }

  public async apagarMotorista(cpf: string) {
    const motoristas = await this.database.getMotoristas();
    const novaListaMotoristas = motoristas.filter(
      (motorista) => motorista.cpf != cpf,
    );
    await this.database.gravarMotorista(novaListaMotoristas);
  }
}
