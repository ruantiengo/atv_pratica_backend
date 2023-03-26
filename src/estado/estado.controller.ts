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
import { EstadoService } from './estado.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';
import { Response } from 'express';

@Controller('estado')
export class EstadoController {
  constructor(private readonly estadoService: EstadoService) {}

  @Post()
  async create(@Body() createEstadoDto: CreateEstadoDto, @Res() res: Response) {
    try {
      const novoEstado = await this.estadoService.create(createEstadoDto);
      return res.status(200).json(novoEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      const novoEstado = await this.estadoService.findAll();
      return res.status(200).json(novoEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      const novoEstado = await this.estadoService.findOne(Number(id));
      return res.status(200).json(novoEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEstadoDto: UpdateEstadoDto,
    @Res() res: Response,
  ) {
    try {
      const updatedEstado = await this.estadoService.update(
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
      const updatedEstado = await this.estadoService.remove(Number(id));
      return res.status(200).json(updatedEstado);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}
