import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { CarRepository } from './repository/car.repository';

@Module({
  providers: [CarService, CarRepository],
  controllers: [CarController]
})
export class CarModule {}
