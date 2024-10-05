/*
  Warnings:

  - You are about to drop the `order_lists` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `distance` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_order_list_id_fkey";

-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "isReady" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "distance" DECIMAL(65,30) NOT NULL;

-- DropTable
DROP TABLE "order_lists";
