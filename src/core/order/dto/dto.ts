import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateOrderBodyRequest{
	@ApiProperty()
	@IsNotEmpty()
	name: string;

	@ApiProperty()
	@IsNotEmpty()
	count: number;

	@ApiProperty()
	@IsNotEmpty()
	weight: number

	@ApiProperty()
	@IsNotEmpty()
	productId: number

	@ApiProperty()
	@IsNotEmpty()
	orderListId: number
}

export class CreateOrderResponse {
	name: string;
	count: number;
	weight: number
	productId: number
	orderListId: number
}