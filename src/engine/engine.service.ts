import { Injectable } from '@nestjs/common';
import { BatteryService } from '../battery/battery.service';

@Injectable()
export class EngineService {
  constructor(private readonly batteryService: BatteryService) {}

  startEngine() {
    // Check if battery is working
    return `${this.batteryService.powerSupply()}
     Engine is working`;
  }
}
