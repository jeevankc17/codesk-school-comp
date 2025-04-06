/*
  Warnings:

  - Changed the type of `gender` on the `Builder` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `tShirtSize` on the `Builder` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `portfolioUrl` on table `Builder` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "GenderBuilder" AS ENUM ('male', 'female', 'other');

-- CreateEnum
CREATE TYPE "TShirtSize" AS ENUM ('S', 'M', 'L', 'XL', 'XXL');

-- AlterTable
ALTER TABLE "Builder" DROP COLUMN "gender",
ADD COLUMN     "gender" "GenderBuilder" NOT NULL,
DROP COLUMN "tShirtSize",
ADD COLUMN     "tShirtSize" "TShirtSize" NOT NULL,
ALTER COLUMN "portfolioUrl" SET NOT NULL;
