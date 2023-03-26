import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private readonly prisma: PrismaService){}

  async create(createEstadoDto: CreateProdutoDto) {
    const {etiqueta, validade} = createEstadoDto
    return await this.prisma.produto.create({
      data: {
        etiqueta,
        validade
      }
    })
  }

  async findAll() {
    return await this.prisma.produto.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.produto.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateEstadoDto: UpdateProdutoDto) {
    return await this.prisma.produto.update({
      where: {
        id: id
      },
      data: {
        etiqueta: updateEstadoDto.etiqueta,
        validade: updateEstadoDto.validade
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.produto.delete({
      where: {
        id
      }
    })
  }
}
