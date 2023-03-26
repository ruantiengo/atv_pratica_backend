import { Injectable } from '@nestjs/common';
import { DateTime } from 'luxon';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTiposanguineoDto } from './dto/create-tiposanguineo.dto';
import { UpdateTiposanguineoDto } from './dto/update-tiposanguineo.dto';


@Injectable()
export class TiposanguineoService {
  constructor(private readonly prisma: PrismaService){}

  async create(createTipoSanguineoDto: CreateTiposanguineoDto) {
    
    return await this.prisma.tipoSanguineo.create({
      data: {
        fator: createTipoSanguineoDto.fator,
        tipo: createTipoSanguineoDto.tipo
      }
    })
  }

  async findAll() {
    return await this.prisma.tipoSanguineo.findMany({
      orderBy: {
        createdAt: "desc"
      }
    })
  }

  async findOne(id: number) {
    return await this.prisma.tipoSanguineo.findUnique({
      where: {
        id
      }
    })
  }

  async update(id: number, updatepessoaDto: UpdateTiposanguineoDto) {
    return await this.prisma.tipoSanguineo.update({
      where: {
        id: id
      },
      data: {
        fator: updatepessoaDto.fator,
        tipo: updatepessoaDto.tipo
      }})
  }
  

  async remove(id: number) {
    return await this.prisma.tipoSanguineo.delete({
      where: {
        id
      }
    })
  }
}
