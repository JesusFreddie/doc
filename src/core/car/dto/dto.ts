import { ApiProperty } from "@nestjs/swagger";
import { Car, Prisma } from "@prisma/client";
import { IsNotEmpty } from "class-validator";

export class CreateCarBodyRequest{
	@ApiProperty()
	@IsNotEmpty()
	number: string;

	@ApiProperty()
	@IsNotEmpty()
	liftingCapacity: number;

	@ApiProperty()
	@IsNotEmpty()
	volume: number;
}

export class CarResponse {
	@ApiProperty()
	id: number;

	@ApiProperty()
	number: string;

	@ApiProperty()
	liftingCapacity: number

	@ApiProperty()
	volume: number
}