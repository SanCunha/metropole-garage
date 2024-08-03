import { Vehicle } from '../../types/Vehicle';
import './Vehicle.css'

interface VehicleCardProps {
    vehicle: Vehicle;
    onSpawn: (vehicleId: number) => void;
}

const toUpperCaseFirstLetter = (word: string) => {
    return word[0].toUpperCase() + word.substring(1)
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSpawn }) => {

    const renderCustomizations = () => {
        const customizations: { [key: string]: string } = JSON.parse(vehicle.customizations);
        return (
            <>
                {Object.entries(customizations).map(([key, value]) => (
                    <p>{toUpperCaseFirstLetter(key)}: {toUpperCaseFirstLetter(value)}</p>
                ))}
            </>

        )
    };


    return (
        <div className="vehicle-card">
            <h2>{vehicle.model}</h2>
            <p>Cor: {vehicle.color}</p>
            <p>Placa: {vehicle.plate}</p>
            {renderCustomizations()}
            <button className={vehicle.spawned ? "isSpawned" : "isNotSpawned"} onClick={() => onSpawn(vehicle.id)}>{vehicle.spawned ? "Despawn" : "Spawn"}</button>
        </div>
    );
};

export default VehicleCard;
