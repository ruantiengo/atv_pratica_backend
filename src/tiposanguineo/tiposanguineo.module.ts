import { Module } from '@nestjs/common';
import { TiposanguineoService } from './tiposanguineo.service';
import { TiposanguineoController } from './tiposanguineo.controller';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TiposanguineoController],
  providers: [TiposanguineoService]
})
export class TiposanguineoModule {}
