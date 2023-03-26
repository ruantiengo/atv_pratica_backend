import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { Response } from 'express';
import { DoacaoService } from './doacao.service';
import { CreateDoacaoDto } from './dto/create-doacao.dto';
import { UpdateDoacaoDto } from './dto/update-doacao.dto';


@Controller('doacao')
export class DoacaoController {
  constructor(private readonly doacaoService: DoacaoService) {}

  @Post()
  async create(@Body() createEstadoDto: CreateDoacaoDto, @Res() res: Response) {
    try{
      const novoEstado = await this.doacaoService.create(createEstadoDto)
      return res.status(200).json(novoEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try{
      const novoEstado = await this.doacaoService.findAll()
      return res.status(200).json(novoEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try{
      const novoEstado = await this.doacaoService.findOne(Number(id))
      return res.status(200).json(novoEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: Number, @Body() updateEstadoDto: UpdateDoacaoDto, @Res() res: Response) {
    try{
      const updatedEstado = await this.doacaoService.update(Number(id), updateEstadoDto)
      return res.status(200).json(updatedEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try{
      const updatedEstado = await this.doacaoService.remove(Number(id))
      return res.status(200).json(updatedEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }
}
