-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LocalColeta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "cidadeId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    CONSTRAINT "LocalColeta_cidadeId_fkey" FOREIGN KEY ("cidadeId") REFERENCES "Cidade" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_LocalColeta" ("cidadeId", "complemento", "id", "nome", "numero", "rua") SELECT "cidadeId", "complemento", "id", "nome", "numero", "rua" FROM "LocalColeta";
DROP TABLE "LocalColeta";
ALTER TABLE "new_LocalColeta" RENAME TO "LocalColeta";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
