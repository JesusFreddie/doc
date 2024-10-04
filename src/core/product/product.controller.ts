import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductResponse, CreateProductBodyRequest} from "./dto/dto"
import { Product } from '@prisma/client';

@ApiTags('product')
@Controller('product')
export class ProductController {

	constructor(
		private readonly productService: ProductService
	) {}

	@Post()
	@HttpCode(HttpStatus.CREATED)
	@ApiCreatedResponse({
		type: CreateProductResponse
	})
	public async create(
		@Body() data: CreateProductBodyRequest
	):Promise<Product> {
		return await this.productService.create(data)
	}

	@Get()
	@HttpCode(HttpStatus.OK)
	@ApiCreatedResponse({
		type: [CreateProductResponse]
	})
	public  getAll(
	):Promise<Array<Product>> {
		return this.productService.getAll()
	}
}
