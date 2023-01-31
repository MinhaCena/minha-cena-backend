/*
  Warnings:

  - You are about to drop the column `age` on the `redactions` table. All the data in the column will be lost.
  - You are about to drop the column `class` on the `redactions` table. All the data in the column will be lost.
  - You are about to drop the column `studentName` on the `redactions` table. All the data in the column will be lost.
  - You are about to drop the column `theme` on the `redactions` table. All the data in the column will be lost.
  - You are about to drop the column `cnpj` on the `schools` table. All the data in the column will be lost.
  - Added the required column `cnpj_inap` to the `schools` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "redactions" DROP COLUMN "age",
DROP COLUMN "class",
DROP COLUMN "studentName",
DROP COLUMN "theme";

-- AlterTable
ALTER TABLE "schools" DROP COLUMN "cnpj",
ADD COLUMN     "cnpj_inap" TEXT NOT NULL;
