import { Module } from '@nestjs/common';
import { passageiroDatabase } from 'src/database/passageiroDatabase';
import { PassageirosController } from './passageiros.controller';
import { PassageirosService } from './passageiros.service';

@Module({
  controllers: [PassageirosController],
  providers: [PassageirosService, passageiroDatabase],
})
export class PassageirosModule {}
