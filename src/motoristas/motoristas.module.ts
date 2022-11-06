import { Module } from '@nestjs/common';
import { motoristaDatabase } from 'src/database/motoristasDatabase';
import { MotoristasController } from './motoristas.controller';
import { MotoristasService } from './motoristas.service';

@Module({
  controllers: [MotoristasController],
  providers: [MotoristasService, motoristaDatabase],
})
export class MotoristasModule {}
