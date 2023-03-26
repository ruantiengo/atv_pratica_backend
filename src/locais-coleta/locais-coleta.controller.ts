import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocalColetaService } from './locais-coleta.service';
import { CreateLocaisColetaDto } from './dto/create-locais-coleta.dto';
import { UpdateLocaisColetaDto } from './dto/update-locais-coleta.dto';

@Controller('locais-coleta')
export class LocaisColetaController {
  constructor(private readonly locaisColetaService: LocalColetaService) {}

  @Post()
  create(@Body() createLocaisColetaDto: CreateLocaisColetaDto) {
    return this.locaisColetaService.create(createLocaisColetaDto);
  }

  @Get()
  findAll() {
    return this.locaisColetaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locaisColetaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocaisColetaDto: UpdateLocaisColetaDto,
  ) {
    return this.locaisColetaService.update(+id, updateLocaisColetaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locaisColetaService.remove(+id);
  }
}
