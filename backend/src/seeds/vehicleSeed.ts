import { AppDataSource } from '../ormconfig';
import { Vehicle } from '../entities/vehicle';

const seedVehicles = async () => {
    await AppDataSource.initialize();

    const vehicleRepository = AppDataSource.getRepository(Vehicle);

    const vehicles = [
        {
            model: 'Adder',
            color: 'Red',
            plate: 'ABC123',
            customizations: '{"spoiler": "high", "neon": "blue"}',
            owner: 'player1_steam_id'
        },
        {
            model: 'Cheetah',
            color: 'Blue',
            plate: 'DEF456',
            customizations: '{"spoiler": "low", "neon": "red"}',
            owner: 'player1_steam_id'
        },
        {
            model: 'EntityXF',
            color: 'Green',
            plate: 'GHI789',
            customizations: '{"spoiler": "medium", "neon": "green"}',
            owner: 'player1_steam_id'
        },
        {
            model: 'Zentorno',
            color: 'Yellow',
            plate: 'JKL012',
            customizations: '{"spoiler": "high", "neon": "yellow"}',
            owner: 'player2_steam_id'
        },
        {
            model: 'T20',
            color: 'Black',
            plate: 'MNO345',
            customizations: '{"spoiler": "low", "neon": "purple"}',
            owner: 'player2_steam_id'
        },
    ];

    for (const vehicle of vehicles) {
        const vehicleEntity = vehicleRepository.create(vehicle);
        await vehicleRepository.save(vehicleEntity);
    }

    await AppDataSource.destroy();
};

seedVehicles()
    .then(() => {
        console.log('Seed complete!');
    })
    .catch((error) => {
        console.error('Seed error:', error);
    });
