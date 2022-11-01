import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MotoristasController } from './motoristas.controller';
import { PassageirosController } from './passageiros.controller';
import { ViagensController } from './viagens.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    MotoristasController,
    PassageirosController,
    ViagensController,
  ],
  providers: [AppService],
})
export class AppModule {}
