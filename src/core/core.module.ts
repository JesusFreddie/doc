import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { OrderListModule } from './order-list/order-list.module';

@Module({

  imports: [CarModule, ProductModule, OrderModule, OrderListModule]
})
export class CoreModule {}
