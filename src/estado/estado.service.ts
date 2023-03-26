import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';

@Injectable()
export class EstadoService {

  constructor(private readonly prisma: PrismaService){}

  async create(createEstadoDto: CreateEstadoDto) {
    const {nome, sigla} = createEstadoDto
    return await this.prisma.estado.create({
      data: {
        nome: nome,
        sigla: sigla
      }
    })
  }

  async findAll() {
    return await this.prisma.estado.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.estado.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updateEstadoDto: UpdateEstadoDto) {
    return await this.prisma.estado.update({
      where: {
        id: id
      },
      data: {
        nome: updateEstadoDto.nome,
        sigla: updateEstadoDto.sigla
      }
    })
  }

  async remove(id: number) {
    return await this.prisma.estado.delete({
      where: {
        id
      }
    })
  }
}
