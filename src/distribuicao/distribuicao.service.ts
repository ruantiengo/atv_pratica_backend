import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateDistribuicaoDto } from './dto/create-distribuicao.dto';
import { UpdateDistribuicaoDto } from './dto/update-distribuicao.dto';

@Injectable()
export class DistribuicaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEstadoDto: CreateDistribuicaoDto) {
    const { data, produtoId, unidadeInt } = createEstadoDto;
    return await this.prisma.distribuicao.create({
      data: {
        data,
        produtoId,
        unidadeId: unidadeInt,
      },
    });
  }

  async findAll() {
    return await this.prisma.distribuicao.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.distribuicao.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateDistribuicaoDto: UpdateDistribuicaoDto) {
    const { data, produtoId, unidadeInt } = updateDistribuicaoDto;

    return await this.prisma.distribuicao.update({
      where: {
        id: id,
      },
      data: {
        data,
        produtoId,
        unidadeId: unidadeInt,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.distribuicao.delete({
      where: {
        id,
      },
    });
  }
}
