import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';
import { BrandsService } from 'src/brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandSerice: BrandsService,
  ) {}

  populateData() {
    this.carsService.fillCarsWhithSeedData(CARS_SEED);
    this.brandSerice.fillBrandsWhithSeedData(BRANDS_SEED);

    return 'Seed Succesfully';
  }
}
