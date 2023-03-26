export class CreatePessoaDto {
  nome: string;
  rua: string;
  numero: string;
  complemento: string;
  documento: string;
  cidadeId: number;
  tipoSanguineoId?: number;
}

// model Pessoa{
//     id Int @id @default(autoincrement())
//     nome String
//     rua String
//     numero String
//     complemento String?
//     documento String?
//     cidadeId Int
//     cidade Cidade @relation(fields: [cidadeId], references: [id])
//     createdAt DateTime @default(now())
//     updatedAt DateTime?
//   }
