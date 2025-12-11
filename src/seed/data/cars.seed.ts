import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
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
  {
    id: uuid(),
    brand: 'Mazda',
    model: 'Mazda3',
  },
  {
    id: uuid(),
    brand: 'Kia',
    model: 'Forte',
  },
  {
    id: uuid(),
    brand: 'Subaru',
    model: 'Impreza',
  },
];
