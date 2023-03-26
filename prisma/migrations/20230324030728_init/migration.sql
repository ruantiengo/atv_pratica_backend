-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Distribuicao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "produtoId" INTEGER NOT NULL,
    "unidadeId" INTEGER NOT NULL,
    "data" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "Distribuicao_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Distribuicao_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "Unidade" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Distribuicao" ("data", "id", "produtoId", "unidadeId") SELECT "data", "id", "produtoId", "unidadeId" FROM "Distribuicao";
DROP TABLE "Distribuicao";
ALTER TABLE "new_Distribuicao" RENAME TO "Distribuicao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
