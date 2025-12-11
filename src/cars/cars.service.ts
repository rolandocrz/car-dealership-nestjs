import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolo',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Ford',
      model: 'Focus',
    },
    {
      id: uuid(),
      brand: 'Chevrolet',
      model: 'Cruze',
    },
    {
      id: uuid(),
      brand: 'Nissan',
      model: 'Sentra',
    },
    {
      id: uuid(),
      brand: 'Volkswagen',
      model: 'Golf',
    },
    {
      id: uuid(),
      brand: 'Hyundai',
      model: 'Elantra',
    },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Not Found car with id ${id}`);
    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(newCar);
    return newCar;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    const car = this.getCarById(id);
    Object.assign(car, updateCarDto);
    return car;
  }

  deleteCar(id: string) {
    const car = this.getCarById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }
}
