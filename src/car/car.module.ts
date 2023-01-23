import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { EngineModule } from '../engine/engine.module';
import { ConditionerModule } from '../conditioner/conditioner.module';

@Module({
  imports: [EngineModule, ConditionerModule],
  controllers: [CarController],
})
export class CarModule {}
