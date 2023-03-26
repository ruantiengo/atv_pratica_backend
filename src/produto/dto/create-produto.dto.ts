export class CreateProdutoDto {
    etiqueta: string
    validade: string
}


// model Produto{
//     id Int @id @default(autoincrement())
//     etiqueta String
//     validade DateTime?  
//     createdAt DateTime @default(now())
//     updatedAt DateTime?
//     distribuicao Distribuicao[] 
//   }