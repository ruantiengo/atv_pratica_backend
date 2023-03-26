import { Module } from '@nestjs/common';
import { CidadeModule } from './cidade/cidade.module';
import { PrismaModule } from './database/prisma.module';
import { EstadoModule } from './estado/estado.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { TiposanguineoModule } from './tiposanguineo/tiposanguineo.module';
import { ProdutoModule } from './produto/produto.module';
import { DoacaoModule } from './doacao/doacao.module';
import { LocaisColetaModule } from './locais-coleta/locais-coleta.module';
import { UnidadeModule } from './unidade/unidade.module';
import { DistribuicaoModule } from './distribuicao/distribuicao.module';

@Module({
  imports: [
    CidadeModule,
    EstadoModule,
    PrismaModule,
    PessoaModule,
    TiposanguineoModule,
    ProdutoModule,
    DoacaoModule,
    LocaisColetaModule,
    UnidadeModule,
    DistribuicaoModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
