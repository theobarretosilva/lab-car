import { Matches, IsNotEmpty, MaxLength, IsString } from 'class-validator';
import { ValidationArguments } from 'class-validator/types/validation/ValidationArguments';
import { cpf } from 'src/utils/validations';

export class Motorista {
  @IsNotEmpty({
    message: 'O nome é obrigatório!',
  })
  @MaxLength(50, {
    message: 'O nome só pode ter até 50 caracteres',
  })
  name: string;

  // @IsString({
  //   message: (args: ValidationArguments) => {
  //     const hoje = new Date().getFullYear;
  //     const nascimento = parseInt(new Date(args).getFullYear);
  //     const idade: number = hoje - nascimento;
  //     if (idade >= 18) {
  //       return args;
  //     }
  //   },
  // })
  birthDate: Date;

  @IsNotEmpty({
    message: 'O CPF é obrigatório!',
  })
  @Matches(cpf, {
    message: 'O CPF deve seguir este modelo: 123.456.789-10',
  })
  cpf: string;

  @IsNotEmpty({
    message: 'A placa do carro é obrigatória!',
  })
  licensePlate: string;

  @IsNotEmpty({
    message: 'O modelo do carro é obrigatório!',
  })
  carModel: string;
}