import { Vehicle } from '../../types/Vehicle';
import VehicleCard from './VehicleCard';
import './Vehicle.css'

interface VehicleListProps {
    vehicles: Vehicle[];
    onSpawn: (vehicleId: number) => void;
}

const VehicleList: React.FC<VehicleListProps> = ({ vehicles, onSpawn }) => {
    return (
        <div className="vehicle-list">
            {vehicles.map((vehicle) => <VehicleCard key={vehicle.plate} vehicle={vehicle} onSpawn={onSpawn} />)}
        </div>
    );
};

export default VehicleList;
