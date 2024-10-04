import { Injectable } from '@nestjs/common';
import { OrderListRepository } from './repository/order-list.repository';
import { OrderList } from '@prisma/client';

@Injectable()
export class OrderListService {

	constructor(
		private readonly orderListRepository: OrderListRepository
	) {}

	public async create(): Promise<OrderList> {
		return this.orderListRepository.create();
	}

	public async getAll(): Promise<Array<OrderList>> {
		return this.orderListRepository.getAll();
	}

	public async getOneById(id: number): Promise<OrderList> {
		return this.orderListRepository.getOneById(id);
	}

}
