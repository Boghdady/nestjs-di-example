import { Controller, Get } from '@nestjs/common';
import { EngineService } from '../engine/engine.service';
import { ConditionerService } from '../conditioner/conditioner.service';

@Controller('car')
export class CarController {
  constructor(
    private readonly engineService: EngineService,
    private readonly conditionerService: ConditionerService,
  ) {}

  @Get()
  move() {
    return [
      this.engineService.startEngine(),
      this.conditionerService.conditionerOn(),
    ];
  }
}
