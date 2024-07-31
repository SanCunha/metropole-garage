import axios from 'axios';
import { Vehicle } from '../types/Vehicle';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // URL do backend
});

export const getVehicles = async (ownerId: string): Promise<Vehicle[]> => {
    // const response = await api.get(`/vehicles?owner=${ownerId}`);
    // return response.data;
    return [
        {
            id: 1,
            model: 'Adder',
            color: 'Red',
            plate: 'ABC123',
            customizations: '{"spoiler": "high", "neon": "blue"}',
            owner: 'player_steam_id'
        },
        {
            id: 2,
            model: 'Zentorno',
            color: 'Blue',
            plate: 'XYZ789',
            customizations: '{"wheels": "sport", "tint": "dark"}',
            owner: 'player_steam_id'
        },
        {
            id: 3,
            model: 'T20',
            color: 'Black',
            plate: 'LMN456',
            customizations: '{"exhaust": "dual", "interior": "carbon"}',
            owner: 'player_steam_id'
        }
    ]
};

export const spawnVehicle = async (vehicleId: number): Promise<void> => {
    await api.post(`/vehicles/spawn`, { vehicleId });
};
