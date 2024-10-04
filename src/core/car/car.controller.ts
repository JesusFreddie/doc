import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarBodyRequest, CarResponse } from './dto/dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Car } from '@prisma/client';

@ApiTags('car')
@Controller('car')
export class CarController {

	constructor(
		private readonly carService: CarService
	) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@ApiCreatedResponse({
		type: CarResponse
	})
	public async create(
		@Body() data: CreateCarBodyRequest
	): Promise<Car> {
		return await this.carService.create(data);
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	@ApiOkResponse({
		type: [CarResponse]
	})
	public getAll(
	): Promise<Array<Car>> {
		return this.carService.getAll()
	}
	
}
