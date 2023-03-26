export class CreateUnidadeDto {
    nome: string
    rua: string
    numero: string
    complemento: string 
    cidadeId: number 
}



// model Unidade{
//     id Int @id @default(autoincrement())
//     nome String
//     rua String
//     numero String
//     complemento String
//     cidadeId Int
//     cidade Cidade @relation(fields: [cidadeId], references: [id])
//     createdAt DateTime @default(now())
//     updatedAt DateTime? 
//     distribuicoes Distribuicao[]
//   }