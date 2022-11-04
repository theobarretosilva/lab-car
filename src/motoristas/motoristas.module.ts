import { Module } from '@nestjs/common';
import { Database } from 'src/database/motoristasDatabase';
import { MotoristasController } from './motoristas.controller';
import { MotoristasService } from './motoristas.service';

@Module({
  controllers: [MotoristasController],
  providers: [MotoristasService, Database],
})
export class MotoristasModule {}
