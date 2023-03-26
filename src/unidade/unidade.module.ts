import { Module } from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { UnidadeController } from './unidade.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UnidadeController],
  providers: [UnidadeService],
})
export class UnidadeModule {}
