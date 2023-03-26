import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
import { PessoaService } from './pessoa.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Response } from 'express';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  async create(@Body() createPessoaDto: CreatePessoaDto, @Res() res: Response) {
    try {
      const novaPessoa = await this.pessoaService.create(createPessoaDto);
      return res.status(200).json(novaPessoa);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const novoEstado = await this.pessoaService.findAll();
      return res.status(200).json(novoEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      const novoEstado = await this.pessoaService.findOne(Number(id));
      return res.status(200).json(novoEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEstadoDto: UpdatePessoaDto,
    @Res() res: Response,
  ) {
    try {
      const updatedEstado = await this.pessoaService.update(
        Number(id),
        updateEstadoDto,
      );
      return res.status(200).json(updatedEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const updatedEstado = await this.pessoaService.remove(Number(id));
      return res.status(200).json(updatedEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
