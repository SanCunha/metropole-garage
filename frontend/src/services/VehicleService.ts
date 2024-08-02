import axios from 'axios';
import { Vehicle } from '../types/Vehicle';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // URL do backend
});

class VehicleService {
  private vehicles: Vehicle[] = [];


  async fetchVehicles(ownerId: string): Promise<Vehicle[]> {
    const response = await api.get(`/vehicles?owner=${ownerId}`);
    return response.data;
  }

  async spawnVehicle(vehicleId: number): Promise<void> {
    // Simulate spawning a vehicle
    return new Promise((resolve, reject) => {
      const vehicle = this.vehicles.find(v => v.id === vehicleId);
      if (vehicle) {
        console.log(`Spawning vehicle: ${vehicle.model} with plate: ${vehicle.plate}`);
        resolve();
      } else {
        reject(new Error('Vehicle not found'));
      }
    });
  }
}

export default new VehicleService();
