import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateProductBodyRequest{
	@ApiProperty()
	@IsNotEmpty()
	name: string;

	@ApiProperty()
	@IsNotEmpty()
	address: string;
}

export class CreateProductResponse {
	id: number;
	name: string;
	address: number;
}