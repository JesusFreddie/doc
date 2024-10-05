import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty } from "class-validator";

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

	@ApiProperty()
	@IsBoolean()
	isReady: boolean;
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

	@ApiProperty()
	isReady: boolean;
}