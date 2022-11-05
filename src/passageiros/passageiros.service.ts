import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { passageiroDatabase } from 'src/database/passageiroDatabase';
import { Passageiro } from './passageiros.entity';

@Injectable()
export class PassageirosService {
  constructor(private database: passageiroDatabase) {}

  public async getPassageiros(page: number, size: number, name: string) {
    const indiceInicial = page * size;
    const indiceFinal = indiceInicial + size;

    const passageiros = await this.database.getPassageiros();
    if (page && size) {
      if (passageiros.length > indiceInicial) {
        if (passageiros.length > indiceFinal) {
          return passageiros.slice(indiceInicial, indiceFinal);
        } else {
          return passageiros.slice(indiceInicial, passageiros.length - 1);
        }
      } else {
        return [];
      }
    } else if (name) {
      const newFilter = passageiros.filter((value) => {
        return value.name.toLowerCase().includes(name);
      });
      return newFilter;
    } else {
      return passageiros;
    }
  }

  public async searchPassageiroByCpf(cpf: string) {
    const passageiros = await this.database.getPassageiros();
    return passageiros.find((passageiro) => passageiro.cpf == cpf);
  }

  public async criarPassageiro(passageiro: Passageiro): Promise<Passageiro> {
    const passageiroExiste = await this.searchPassageiroByCpf(passageiro.cpf);
    const birthDate = new Date(passageiro.birthDate);
    const dataHoje = new Date();
    const idade: number = dataHoje.getFullYear() - birthDate.getFullYear();

    if (idade >= 18) {
      if (passageiroExiste) {
        throw new ConflictException({
          statusCode: 409,
          message: 'Este passageiro já está cadastrado!',
        });
      }
      await this.database.gravar(passageiro);
      return passageiro;
    } else {
      throw new BadRequestException({
        statusCode: 400,
        message:
          'O motorista deve ser maior de 18 anos! Idade fornecida: ' + idade,
      });
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  public async updateInfoPassageiro(cpf: string) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  public async blockUnblockPassageiro(cpf: string) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  public async deletePassageiro(cpf: string) {}
}
