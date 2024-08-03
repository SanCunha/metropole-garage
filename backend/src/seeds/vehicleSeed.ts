import { AppDataSource } from '../ormconfig';
import { Vehicle } from '../entities/vehicle';

const seedVehicles = async () => {
    await AppDataSource.initialize();

    const vehicleRepository = AppDataSource.getRepository(Vehicle);

    await vehicleRepository.clear()

    const vehicles = [
        {
            model: 'Adder',
            color: 'Vermelho',
            plate: 'ABC123',
            customizations: '{"aerofólio": "alto", "neon": "azul"}',
            owner: 'player1_steam_id'
        },
        {
            model: 'Cheetah',
            color: 'Azul',
            plate: 'DEF456',
            customizations: '{"aerofólio": "baixo", "neon": "vermelho"}',
            owner: 'player1_steam_id'
        },
        {
            model: 'EntityXF',
            color: 'Verde',
            plate: 'GHI789',
            customizations: '{"aerofólio": "médio", "neon": "verde"}',
            owner: 'player1_steam_id'
        },
        {
            model: 'Zentorno',
            color: 'Amarelo',
            plate: 'JKL012',
            customizations: '{"aerofólio": "alto", "neon": "amarelo"}',
            owner: 'player2_steam_id'
        },
        {
            model: 'T20',
            color: 'Preto',
            plate: 'MNO345',
            customizations: '{"aerofolio": "baixo", "neon": "roxo"}',
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
