import { Module } from '@nestjs/common';
import { CarModule } from './car/car.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({

  imports: [CarModule, ProductModule, OrderModule]
})
export class CoreModule {}
