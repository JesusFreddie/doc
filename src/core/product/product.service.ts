import { Injectable } from '@nestjs/common';
import { CreateProductBodyRequest } from './dto/dto';
import { ProductRepository } from './repository/product.repository';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {

	constructor(
		private readonly productRepository: ProductRepository
	) {}

	public async create(data: CreateProductBodyRequest): Promise<Product> {
		return await this.productRepository.create(data);
	}

	public async delete(id): Promise<number> {
		return await this.productRepository.delete(id);
	}

	public async getAll(): Promise<Array<Product>>{
		return await this.productRepository.getAll()
	}

	public async getOneById(id:number): Promise<Product>{
		return await this.productRepository.getOneById(id)
	}
}
