import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TiposanguineoService } from './tiposanguineo.service';
import { CreateTiposanguineoDto } from './dto/create-tiposanguineo.dto';
import { UpdateTiposanguineoDto } from './dto/update-tiposanguineo.dto';
import { Res } from '@nestjs/common/decorators';
import { Response } from 'express';

@Controller('tiposanguineo')
export class TiposanguineoController {
  constructor(private readonly tiposanguineoService: TiposanguineoService) {}

  @Post()
  async create(@Body() createTipoSanguineo: CreateTiposanguineoDto, @Res() res: Response) {
    try{
      const novoTipoSanguineo = await this.tiposanguineoService.create(createTipoSanguineo)
      return res.status(200).json(novoTipoSanguineo)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try{
      const allTipoos = await this.tiposanguineoService.findAll()
      return res.status(200).json(allTipoos)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try{
      const tipoSanguineo = await this.tiposanguineoService.findOne(Number(id))
      return res.status(200).json(tipoSanguineo)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: Number, @Body() updateEstadoDto: UpdateTiposanguineoDto, @Res() res: Response) {
    try{
      const upodatedTipoSanguineo = await this.tiposanguineoService.update(Number(id), updateEstadoDto)
      return res.status(200).json(upodatedTipoSanguineo)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try{
      const updatedEstado = await this.tiposanguineoService.remove(Number(id))
      return res.status(200).json(updatedEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }
}
