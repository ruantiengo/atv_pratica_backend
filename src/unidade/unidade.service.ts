import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';


@Injectable()
export class UnidadeService {
  constructor(private readonly prisma: PrismaService){}

  async create(createEstadoDto: CreateUnidadeDto) {
    const {nome, cidadeId, complemento, numero, rua} = createEstadoDto
    return await this.prisma.unidade.create({
      data: {
        cidadeId,
        nome, 
        complemento,
        numero,
        rua
      }
    })
  }

  async findAll() {
    return await this.prisma.unidade.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.unidade.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateUnidadeDto: UpdateUnidadeDto) {
    const {nome, cidadeId, complemento, numero, rua} = updateUnidadeDto
    return await this.prisma.unidade.update({
      where: {
        id: id
      },
      data: {
        cidadeId,
        nome, 
        complemento,
        numero,
        rua
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.unidade.delete({
      where: {
        id
      }
    })
  }
}
