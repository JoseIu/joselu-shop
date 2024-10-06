/*
  Warnings:

  - The values [XXXl] on the enum `Size` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `gender` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('men', 'women', 'kid', 'unisex');

-- AlterEnum
BEGIN;
CREATE TYPE "Size_new" AS ENUM ('S', 'M', 'L', 'XL', 'XXL', 'XXXL');
ALTER TABLE "Product" ALTER COLUMN "sizes" DROP DEFAULT;
ALTER TABLE "Product" ALTER COLUMN "sizes" TYPE "Size_new"[] USING ("sizes"::text::"Size_new"[]);
ALTER TYPE "Size" RENAME TO "Size_old";
ALTER TYPE "Size_new" RENAME TO "Size";
DROP TYPE "Size_old";
ALTER TABLE "Product" ALTER COLUMN "sizes" SET DEFAULT ARRAY[]::"Size"[];
COMMIT;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "gender",
ADD COLUMN     "gender" "Gender" NOT NULL;

-- DropEnum
DROP TYPE "Geneder";

-- CreateIndex
CREATE INDEX "Product_gender_idx" ON "Product"("gender");
