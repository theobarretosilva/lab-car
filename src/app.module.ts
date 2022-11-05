import { Module } from '@nestjs/common';
import { MotoristasModule } from './motoristas/motoristas.module';
import { PassageirosModule } from './passageiros/passageiros.module';

@Module({
  imports: [MotoristasModule, PassageirosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
