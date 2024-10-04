-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "count" INTEGER NOT NULL,
    "weight" DECIMAL(65,30) NOT NULL,
    "product_id" INTEGER NOT NULL,
    "order_list_id" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_lists" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "order_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cars" (
    "id" SERIAL NOT NULL,
    "lifting_capacity" DECIMAL(65,30) NOT NULL,
    "volume" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "cars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_order_list_id_fkey" FOREIGN KEY ("order_list_id") REFERENCES "order_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
