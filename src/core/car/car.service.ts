import { Injectable } from '@nestjs/common';
import { CarRepository } from './repository/car.repository';
import { CreateCarBodyRequest } from './dto/dto';
import { Car } from '@prisma/client';

@Injectable()
export class CarService {

	constructor(
		private readonly carRepository: CarRepository
	) {}

	public async create(data: CreateCarBodyRequest): Promise<Car> {
		return await this.carRepository.create(data);
	}

	public async delete(id: number): Promise<number> {
		return await this.carRepository.delete(id);
	}

	public async getAll(): Promise<Array<Car>>{
		return await this.carRepository.getAll();
	}
	
	public async getOneById(id: number): Promise<Car> {
		return await this.carRepository.getOneById(id);
	}
}
