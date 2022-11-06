import { Module } from '@nestjs/common';
import { passageiroDatabase } from 'src/database/passageiroDatabase';
import { viagensDatabase } from 'src/database/viagensDatabase';
import { ViagensController } from './viagens.controller';
import { ViagensService } from './viagens.service';

@Module({
  controllers: [ViagensController],
  providers: [ViagensService, viagensDatabase, passageiroDatabase],
})
export class ViagensModule {}
