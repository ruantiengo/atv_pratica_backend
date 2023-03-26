import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';

@Injectable()
export class PessoaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPessoaDto: CreatePessoaDto) {
    return await this.prisma.pessoa.create({
      data: {
        nome: createPessoaDto.nome,
        numero: createPessoaDto.numero,
        rua: createPessoaDto.rua,
        cidadeId: createPessoaDto.cidadeId,
        complemento: createPessoaDto.complemento,
        documento: createPessoaDto.documento,
        tipoSanguineoId: createPessoaDto.tipoSanguineoId,
      },
    });
  }

  async findAll() {
    return await this.prisma.pessoa.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        cidade: true,
        tipoSanguineo: true,
      },
    });
  }

  async findOne(id: number) {
    return await this.prisma.pessoa.findUnique({
      where: {
        id,
      },
      include: {
        cidade: true,
        tipoSanguineo: true,
      },
    });
  }

  async update(id: number, updatepessoaDto: UpdatePessoaDto) {
    return await this.prisma.pessoa.update({
      where: {
        id: id,
      },
      data: {
        nome: updatepessoaDto.nome,
        numero: updatepessoaDto.numero,
        rua: updatepessoaDto.rua,
        cidadeId: updatepessoaDto.cidadeId,
        complemento: updatepessoaDto.complemento,
        documento: updatepessoaDto.documento,
      },
    });
  }

  async remove(id: number) {
    return await this.prisma.pessoa.delete({
      where: {
        id,
      },
    });
  }
}
