import { AppDataSource } from '../ormconfig';
import { Vehicle } from '../entities/vehicle';

export const vehicleRepository = AppDataSource.getRepository(Vehicle);
