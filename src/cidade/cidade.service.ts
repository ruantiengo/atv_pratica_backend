import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';

@Injectable()
export class CidadeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCidadeDto: CreateCidadeDto) {
    const { nome, estadoId } = createCidadeDto;
    return await this.prisma.cidade.create({
      data: {
        nome: nome,
        estadoId: estadoId,
      },
    });
  }

  async findAll() {
    return await this.prisma.cidade.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        estado: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.cidade.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateCidadeDto: UpdateCidadeDto) {
    return await this.prisma.cidade.update({
      where: {
        id: id,
      },
      data: {
        nome: updateCidadeDto.nome,
        estadoId: updateCidadeDto.estadoId,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.estado.delete({
      where: {
        id,
      },
    });
  }
}
