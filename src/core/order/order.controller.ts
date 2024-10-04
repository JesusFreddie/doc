import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderBodyRequest, CreateOrderResponse } from './dto/dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Order } from '@prisma/client';

@ApiTags('order')
@Controller('order')
export class OrderController {

	constructor(
		private readonly orderService: OrderService
	) {}
	@Post()
	@HttpCode(HttpStatus.CREATED)
	@ApiCreatedResponse({
		type: CreateOrderResponse
	})
	public async create(
		@Body() data: CreateOrderBodyRequest
	): Promise<Order> {
		return await this.orderService.create(data);
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({
		type: [CreateOrderResponse]
	})
	public getAll(
	): Promise<Array<Order>> {
		return this.orderService.getAll()
	}
}
