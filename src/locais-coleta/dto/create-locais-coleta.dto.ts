export class CreateLocaisColetaDto {
    nome: string
    rua: string
    numero: string
    complemento: string
    cidadeId: number
}


// model LocaisColeta{
//     id Int @id @default(autoincrement())
//     nome String
//     rua String
//     numero String
//     complemento String
//     cidadeId Int
//     cidade Cidade @relation(fields: [cidadeId], references: [id])
//   }