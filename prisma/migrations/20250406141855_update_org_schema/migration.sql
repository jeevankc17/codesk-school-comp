/*
  Warnings:

  - The `organizationType` column on the `Organizer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "OrganizerType" AS ENUM ('educational', 'corporate', 'nonprofit', 'other');

-- AlterTable
ALTER TABLE "Organizer" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "role" DROP NOT NULL,
ALTER COLUMN "street" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL,
ALTER COLUMN "state" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "zipCode" DROP NOT NULL,
ALTER COLUMN "organizationName" DROP NOT NULL,
DROP COLUMN "organizationType",
ADD COLUMN     "organizationType" "OrganizerType",
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "establishedYear" DROP NOT NULL,
ALTER COLUMN "teamSize" DROP NOT NULL,
ALTER COLUMN "previousHackathons" DROP NOT NULL;
