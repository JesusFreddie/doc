import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";


export class OrderListResponse {
	@ApiProperty()
	number: string

	@ApiProperty()
	liftingCapacity: number;

	@ApiProperty()
	volume: number;

}