import { Module } from '@nestjs/common';
import { MotoristasController } from './motoristas/motoristas.controller';
import { MotoristasService } from './motoristas/motoristas.service';
import { PassageirosController } from './passageiros/passageiros.controller';
import { ViagensController } from './viagens/viagens.controller';

@Module({
  imports: [],
  controllers: [MotoristasController, PassageirosController, ViagensController],
  providers: [MotoristasService],
})
export class AppModule {}
