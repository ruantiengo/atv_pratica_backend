import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { Response } from 'express';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Controller('unidade')
export class UnidadeController {
  constructor(private readonly unidadeService: UnidadeService) {}
  @Post()
  async create(@Body() createEstadoDto: CreateUnidadeDto, @Res() res: Response) {
    try{
      const novoEstado = await this.unidadeService.create(createEstadoDto)
      return res.status(200).json(novoEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try{
      const novoEstado = await this.unidadeService.findAll()
      return res.status(200).json(novoEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try{
      const novoEstado = await this.unidadeService.findOne(Number(id))
      return res.status(200).json(novoEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: Number, @Body() updateUnidadeDto: UpdateUnidadeDto, @Res() res: Response) {
    try{
      const updatedEstado = await this.unidadeService.update(Number(id), updateUnidadeDto)
      return res.status(200).json(updatedEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try{
      const updatedEstado = await this.unidadeService.remove(Number(id))
      return res.status(200).json(updatedEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }
}
