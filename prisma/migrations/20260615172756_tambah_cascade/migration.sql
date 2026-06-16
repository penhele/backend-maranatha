-- DropForeignKey
ALTER TABLE "Leadership" DROP CONSTRAINT "Leadership_congregationId_fkey";

-- AddForeignKey
ALTER TABLE "Leadership" ADD CONSTRAINT "Leadership_congregationId_fkey" FOREIGN KEY ("congregationId") REFERENCES "Congregation"("id") ON DELETE CASCADE ON UPDATE CASCADE;
