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
import { Response } from 'express';
import { DistribuicaoService } from './distribuicao.service';
import { CreateDistribuicaoDto } from './dto/create-distribuicao.dto';
import { UpdateDistribuicaoDto } from './dto/update-distribuicao.dto';

@Controller('distribuicao')
export class DistribuicaoController {
  constructor(private readonly distribuicaoService: DistribuicaoService) {}

  @Post()
  async create(
    @Body() createDistribuicaoDto: CreateDistribuicaoDto,
    @Res() res: Response,
  ) {
    try {
      const novaDistribuicao = await this.distribuicaoService.create(
        createDistribuicaoDto,
      );
      return res.status(200).json(novaDistribuicao);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const novoEstado = await this.distribuicaoService.findAll();
      return res.status(200).json(novoEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      const novoEstado = await this.distribuicaoService.findOne(Number(id));
      return res.status(200).json(novoEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEstadoDto: UpdateDistribuicaoDto,
    @Res() res: Response,
  ) {
    try {
      const updatedEstado = await this.distribuicaoService.update(
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
      const updatedEstado = await this.distribuicaoService.remove(Number(id));
      return res.status(200).json(updatedEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
