import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateLocaisColetaDto } from './dto/create-locais-coleta.dto';
import { UpdateLocaisColetaDto } from './dto/update-locais-coleta.dto';

@Injectable()
export class LocalColetaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLocalColeta: CreateLocaisColetaDto) {
    const { nome, cidadeId, complemento, numero, rua } = createLocalColeta;
    return await this.prisma.localColeta.create({
      data: {
        nome,
        complemento,
        numero,
        rua,
        cidadeId,
      },
    });
  }

  async findAll() {
    return await this.prisma.localColeta.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.localColeta.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateLocalColetaDto: UpdateLocaisColetaDto) {
    const { nome, cidadeId, complemento, numero, rua } = updateLocalColetaDto;
    return await this.prisma.localColeta.update({
      where: {
        id: id,
      },
      data: {
        nome,
        complemento,
        numero,
        rua,
        cidadeId,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.localColeta.delete({
      where: {
        id,
      },
    });
  }
}
