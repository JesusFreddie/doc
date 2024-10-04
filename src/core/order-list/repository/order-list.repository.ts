import { Injectable } from "@nestjs/common";
import { OrderList } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";

@Injectable()
export class OrderListRepository {
	
	constructor(
		private readonly db: DatabaseService
	) {}

	public async create(): Promise<OrderList> {
		return this.db.orderList.create({ data: {} })
	}

	public async getAll(): Promise<Array<OrderList>> {
		return this.db.orderList.findMany();
	}

	public async getOneById(id: number): Promise<OrderList> {
		return this.db.orderList.findUnique({ where: { id } })
	}

}