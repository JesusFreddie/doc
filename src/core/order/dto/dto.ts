import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateOrderBodyRequest{
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

	@ApiProperty()
	distance: number;
}

export class CreateOrderResponse {

	@ApiProperty()
	count: number;

	@ApiProperty()
	weight: number;

	@ApiProperty()
	productId: number;

	@ApiProperty()
	orderListId: number;
	
	@ApiProperty()
	distance: number;
}