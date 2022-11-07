import { Module } from '@nestjs/common';
import { passageiroDatabase } from 'src/database/passageiroDatabase';
import { viagensDatabase } from 'src/database/viagensDatabase';
import { PassageirosController } from 'src/passageiros/passageiros.controller';
import { PassageirosService } from 'src/passageiros/passageiros.service';
import { ViagensController } from './viagens.controller';
import { ViagensService } from './viagens.service';

@Module({
  controllers: [ViagensController],
  providers: [
    ViagensService,
    viagensDatabase,
    passageiroDatabase,
    PassageirosController,
    PassageirosService,
  ],
})
export class ViagensModule {}
