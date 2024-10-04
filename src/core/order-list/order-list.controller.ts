import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { OrderListRepository } from './repository/order-list.repository';
import { OrderList } from '@prisma/client';
import { OrderListResponse } from './dto/dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('order-list')
@Controller('order-list')
export class OrderListController {

	constructor(
		private readonly orderListService: OrderListRepository
	) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@ApiCreatedResponse({
		type: OrderListResponse
	})
	public async create(): Promise<OrderList> {
		return this.orderListService.create();
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({
		type: OrderListResponse
	})
	public async getAll(): Promise<Array<OrderList>> {
		return this.orderListService.getAll();
	}

}
