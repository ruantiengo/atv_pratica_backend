export class CreateDistribuicaoDto {
    produtoId: number
    unidadeInt: number
    data: string
}


// model Distribuicao{
//     id Int @id @default(autoincrement())
//     produtoId Int
//     produto Produto @relation(fields: [produtoId], references: [id])
//     unidadeId Int
//     unidade Unidade @relation(fields: [unidadeId], references: [id])
//     data String
//   }