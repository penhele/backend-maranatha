-- DropForeignKey
ALTER TABLE "Leadership" DROP CONSTRAINT "Leadership_pelkatId_fkey";

-- DropForeignKey
ALTER TABLE "Leadership" DROP CONSTRAINT "Leadership_positionId_fkey";

-- AddForeignKey
ALTER TABLE "Leadership" ADD CONSTRAINT "Leadership_positionId_fkey" FOREIGN KEY ("positionId") REFERENCES "Position"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Leadership" ADD CONSTRAINT "Leadership_pelkatId_fkey" FOREIGN KEY ("pelkatId") REFERENCES "Pelkat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
