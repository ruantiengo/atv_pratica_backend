import { Module } from '@nestjs/common';
import { DoacaoService } from './doacao.service';
import { DoacaoController } from './doacao.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DoacaoController],
  providers: [DoacaoService],
})
export class DoacaoModule {}
