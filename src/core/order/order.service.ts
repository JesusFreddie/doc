import { Injectable } from '@nestjs/common';
import { OrderRepository } from './repository/order.repository';
import { CreateOrderBodyRequest } from './dto/dto';
import { Order } from '@prisma/client';

@Injectable()
export class OrderService {

	constructor(
		private readonly orderRepository: OrderRepository
	) {}

	public async create(data: CreateOrderBodyRequest): Promise<Order> {
		return await this.orderRepository.create(data);
	}

	public async delete(id: number): Promise<number> {
		return await this.orderRepository.delete(id);
	}

	public async getAll(): Promise<Array<Order>>{
		return await this.orderRepository.getAll();
	}
	
	public async getOneById(id: number): Promise<Order> {
		return await this.orderRepository.getOneById(id);
	}
}
