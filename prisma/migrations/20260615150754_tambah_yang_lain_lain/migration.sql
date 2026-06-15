/*
  Warnings:

  - Added the required column `pelkatId` to the `Congregation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Congregation" ADD COLUMN     "pelkatId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Pelkat" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pelkat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Leadership" (
    "id" TEXT NOT NULL,
    "positionId" TEXT NOT NULL,
    "congregationId" TEXT NOT NULL,
    "pelkatId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Leadership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Position" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Position_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Leadership_congregationId_key" ON "Leadership"("congregationId");

-- CreateIndex
CREATE UNIQUE INDEX "Leadership_pelkatId_positionId_key" ON "Leadership"("pelkatId", "positionId");

-- AddForeignKey
ALTER TABLE "Congregation" ADD CONSTRAINT "Congregation_pelkatId_fkey" FOREIGN KEY ("pelkatId") REFERENCES "Pelkat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leadership" ADD CONSTRAINT "Leadership_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leadership" ADD CONSTRAINT "Leadership_congregationId_fkey" FOREIGN KEY ("congregationId") REFERENCES "Congregation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leadership" ADD CONSTRAINT "Leadership_pelkatId_fkey" FOREIGN KEY ("pelkatId") REFERENCES "Pelkat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
