import { Injectable } from "@nestjs/common";
import { DatabaseService } from "src/database/database.service";
import { Order } from "@prisma/client";
import { CreateOrderBodyRequest } from "../dto/dto";

@Injectable()
export class OrderRepository {

	constructor(
		private readonly db: DatabaseService
	) {}

	public async create(data: CreateOrderBodyRequest): Promise<Order>{
		return await this.db.order.create({data})
	}

	public async delete(id:number): Promise<number>{
		await this.db.order.delete({where:{ id }})
		return id;
	}

	public async getAll(): Promise<Array<Order>>{
		return await this.db.order.findMany();
	}

	public async getOneById(id:number): Promise<Order>{
		return await this.db.order.findUnique({where: {id}})
	}
}