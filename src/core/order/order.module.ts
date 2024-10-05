import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { OrderRepository } from './repository/order.repository';
import { ProductModule } from '../product/product.module';

@Module({
	imports: [ProductModule],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository]
})
export class OrderModule {}
