import { Module } from '@nestjs/common';
import { MotoristasModule } from './motoristas/motoristas.module';

@Module({
  imports: [MotoristasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
