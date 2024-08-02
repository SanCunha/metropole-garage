import { Vehicle } from '../../types/Vehicle';

interface VehicleCardProps {
    vehicle: Vehicle;
    onSpawn: (vehicleId: number) => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSpawn }) => {
    return (
        <div className="vehicle-card">
            <h3>{vehicle.model}</h3>
            <p>Color: {vehicle.color}</p>
            <p>Plate: {vehicle.plate}</p>
            <p>Customizations: {vehicle.customizations}</p>
            <button onClick={() => onSpawn(vehicle.id)}>Spawn</button>
        </div>
    );
};

export default VehicleCard;
