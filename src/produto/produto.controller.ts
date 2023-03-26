import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Response } from 'express';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  async create(@Body() produtoServiceDto: CreateProdutoDto, @Res() res: Response) {
    try{
      const novoEstado = await this.produtoService.create(produtoServiceDto)
      return res.status(200).json(novoEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Get()
  async findAll(@Res() res: Response) {
    try{
      const novoEstado = await this.produtoService.findAll()
      return res.status(200).json(novoEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try{
      const novoEstado = await this.produtoService.findOne(Number(id))
      return res.status(200).json(novoEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Patch(':id')
  async update(@Param('id') id: Number, @Body() updateEstadoDto: UpdateProdutoDto, @Res() res: Response) {
    try{
      const updatedEstado = await this.produtoService.update(Number(id), updateEstadoDto)
      return res.status(200).json(updatedEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    try{
      const updatedEstado = await this.produtoService.remove(Number(id))
      return res.status(200).json(updatedEstado)
    } catch(error){
      return res.status(500).json(error.message);
    }
  }
}
