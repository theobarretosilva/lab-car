import { Module } from '@nestjs/common';
import { MotoristasModule } from './motoristas/motoristas.module';
import { PassageirosModule } from './passageiros/passageiros.module';
import { ViagensModule } from './viagens/viagens.module';

@Module({
  imports: [MotoristasModule, PassageirosModule, ViagensModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
