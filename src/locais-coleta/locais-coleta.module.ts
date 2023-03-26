import { Module } from '@nestjs/common';
import { LocalColetaService } from './locais-coleta.service';
import { LocaisColetaController } from './locais-coleta.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LocaisColetaController],
  providers: [LocalColetaService],
})
export class LocaisColetaModule {}
