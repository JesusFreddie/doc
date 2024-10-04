import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { CreateCarBodyRequest } from "../dto/dto";
import { Car } from "@prisma/client";


@Injectable()
export class CarRepository {

	constructor(
		private readonly db: DatabaseService
	) {}

	public async create(data: CreateCarBodyRequest): Promise<Car> {
		return await this.db.car.create({ data })
	}

	public async delete(id: number): Promise<number> {
		await this.db.car.delete({ where: { id } })
		return id;
	}

	public async getAll(): Promise<Array<Car>> {
		return await this.db.car.findMany();
	}

	public async getOneById(id: number): Promise<Car> {
		return await this.db.car.findUnique({ where: { id } });
	}

}