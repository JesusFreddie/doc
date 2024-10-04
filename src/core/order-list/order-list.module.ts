import { Module } from '@nestjs/common';
import { OrderListService } from './order-list.service';
import { OrderListController } from './order-list.controller';
import { OrderListRepository } from './repository/order-list.repository';

@Module({
  providers: [OrderListService, OrderListRepository],
  controllers: [OrderListController]
})
export class OrderListModule {}
