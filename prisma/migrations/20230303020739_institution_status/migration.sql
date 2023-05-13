/*
  Warnings:

  - You are about to drop the column `registrant_status` on the `institutions` table. All the data in the column will be lost.
  - Added the required column `institution_status` to the `institutions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "institutions" DROP COLUMN "registrant_status",
ADD COLUMN     "institution_status" INTEGER NOT NULL;
