export class CreateDoacaoDto {
    pessoaId: number
    data: string
}


// model Doacao{
//     id Int @id @default(autoincrement())
//     pessoaId Int?
//     pessoa Pessoa? @relation(fields: [pessoaId], references: [id])
//     data String
//     createdAt DateTime @default(now())
//     updatedAt DateTime? 
//   }