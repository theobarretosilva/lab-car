import { Matches, IsNotEmpty, MaxLength } from 'class-validator';
import { cpf } from 'src/utils/validations';

export class Passageiro {
  @IsNotEmpty({
    message: 'O nome é obrigatório!',
  })
  @MaxLength(50, {
    message: 'O nome só pode ter até 50 caracteres',
  })
  name: string;

  @IsNotEmpty({
    message: 'A data de nascimento é obrigatória!',
  })
  birthDate: string;

  @IsNotEmpty({
    message: 'O CPF é obrigatório!',
  })
  @Matches(cpf, {
    message: 'O CPF deve seguir este modelo: 123.456.789-10',
  })
  cpf: string;

  @IsNotEmpty({
    message: 'O endereço é obrigatório!',
  })
  address: string;

  blocked?: boolean = false;

  viagens? = [];
}
