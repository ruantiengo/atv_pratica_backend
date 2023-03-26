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
import { CidadeService } from './cidade.service';
import { CreateCidadeDto } from './dto/create-cidade.dto';
import { UpdateCidadeDto } from './dto/update-cidade.dto';
import { Response } from 'express';

@Controller('cidade')
export class CidadeController {
  constructor(private readonly cidadeService: CidadeService) {}

  @Post()
  async create(@Body() createCidadeDto: CreateCidadeDto, @Res() res: Response) {
    try {
      const novaCidade = await this.cidadeService.create(createCidadeDto);
      return res.status(200).json(novaCidade);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const novoEstado = await this.cidadeService.findAll();
      return res.status(200).json(novoEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      const novoEstado = await this.cidadeService.findOne(Number(id));
      return res.status(200).json(novoEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCidadeDto: UpdateCidadeDto,
    @Res() res: Response,
  ) {
    try {
      const updatedEstado = await this.cidadeService.update(
        Number(id),
        updateCidadeDto,
      );
      return res.status(200).json(updatedEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try {
      const updatedEstado = await this.cidadeService.remove(Number(id));
      return res.status(200).json(updatedEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
