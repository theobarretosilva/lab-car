import { IsNotEmpty } from 'class-validator';

export class Viagem {
  @IsNotEmpty({
    message: 'O id do passageiro é obrigatório',
  })
  idPassageiro: string;

  @IsNotEmpty({
    message: 'O endereço de origem é obrigatório',
  })
  enderecoOrigem: string;

  @IsNotEmpty({
    message: 'O endereço de destino é obrigatório',
  })
  enderecoDestino: string;
}
