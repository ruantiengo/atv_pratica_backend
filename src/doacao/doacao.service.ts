import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateDoacaoDto } from './dto/create-doacao.dto';
import { UpdateDoacaoDto } from './dto/update-doacao.dto';

@Injectable()
export class DoacaoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createDoacaoDto: CreateDoacaoDto) {
    const { data, pessoaId } = createDoacaoDto;
    return await this.prisma.doacao.create({
      data: {
        data,
        pessoaId,
      },
    });
  }

  async findAll() {
    return await this.prisma.doacao.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.doacao.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateDoacaoDto: UpdateDoacaoDto) {
    return await this.prisma.doacao.update({
      where: {
        id: id,
      },
      data: {
        data: updateDoacaoDto.data,
        pessoaId: updateDoacaoDto.pessoaId,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.doacao.delete({
      where: {
        id,
      },
    });
  }
}
