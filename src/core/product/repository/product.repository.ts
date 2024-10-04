import { Injectable } from "@nestjs/common";
import { Product } from "@prisma/client";
import { DatabaseService } from "src/database/database.service";
import { CreateProductBodyRequest } from "../dto/dto";

@Injectable()
export class ProductRepository {

	constructor(
		private readonly db: DatabaseService
	) {}
	
	public async create(data: CreateProductBodyRequest): Promise<Product> {
		return await this.db.product.create({ data })
	}

	public async delete(id: number): Promise<number> {
		await this.db.product.delete({ where: { id } })
		return id;
	}

	public async getAll(): Promise<Array<Product>> {
		return await this.db.product.findMany();
	}

	public async getOneById(id: number): Promise<Product> {
		return await this.db.product.findUnique({ where: { id } });
	}
}