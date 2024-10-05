import { BadRequestException, Injectable } from '@nestjs/common';
import { OrderRepository } from './repository/order.repository';
import { CreateOrderBodyRequest } from './dto/dto';
import { Order } from '@prisma/client';
import { ProductService } from '../product/product.service';

@Injectable()
export class OrderService {

	constructor(
		private readonly orderRepository: OrderRepository,
		private readonly productService: ProductService
	) {}

	public async create(data: CreateOrderBodyRequest): Promise<Order> {
		const product = await this.productService.getOneById(data.productId);

		if (!product)
			throw new BadRequestException("Деталь не найдена")

		return await this.orderRepository.create(data);
	}

	public async delete(id: number): Promise<number> {
		const order = await this.orderRepository.getOneById(id);

		if (!order)
			throw new BadRequestException('Заказ не найден')

		return await this.orderRepository.delete(id);
	}

	public async getAll(): Promise<Array<Order>>{
		return await this.orderRepository.getAll();
	}
	
	public async getOneById(id: number): Promise<Order> {
		return await this.orderRepository.getOneById(id);
	}
}
