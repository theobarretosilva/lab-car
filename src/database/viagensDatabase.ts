import { Injectable } from '@nestjs/common';
import { readFileSync, writeFileSync } from 'fs';
import { Viagem } from 'src/viagens/viagens.entity';

@Injectable()
export class viagensDatabase {
  private FILENAME = 'viagens.json';

  public async getViagens(): Promise<Viagem[]> {
    const viagensInFile = await readFileSync(this.FILENAME, 'utf-8');
    const viagens = JSON.parse(viagensInFile);
    return viagens;
  }

  public async gravar(viagem: Viagem) {
    let viagens = await this.getViagens();
    if (!viagens) {
      viagens = [];
    }
    writeFileSync(this.FILENAME, JSON.stringify([...viagens, viagem]));
  }

  public async gravarViagem(viagens: Viagem[]) {
    writeFileSync(this.FILENAME, JSON.stringify(viagens));
  }
}
