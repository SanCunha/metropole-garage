import { vehicleRepository } from '../repositories/vehicleRepository';
import { Vehicle } from '../entities/vehicle';

export const getVehiclesByOwner = async (owner: string): Promise<Vehicle[]> => {
    return await vehicleRepository.find({ where: { owner } });
};

export const spawnVehicleById = async (vehicleId: number): Promise<Vehicle | null> => {
    const vehicle = await vehicleRepository.findOneBy({ id: vehicleId });
    if (vehicle) {
        // Lógica para "spawnar" o veículo (atualizar o status, etc.)
        // Por exemplo: vehicle.status = 'spawned';
        await vehicleRepository.save(vehicle);
    }
    return vehicle;
};
