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
            <table>
                <thead>
                    <th>
                        Componente
                    </th>
                    <th>
                        Configuração
                    </th>
                </thead>
                <tbody>
                    {Object.entries(customizations).map(([key, value]) => (
                        <tr>
                            <td key={key}>
                                {toUpperCaseFirstLetter(key)}
                            </td>
                            <td key={key + value}>
                                {toUpperCaseFirstLetter(value)}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };


    return (
        <div className="vehicle-card">
            <h3>{vehicle.model}</h3>
            <p>Cor: {vehicle.color}</p>
            <p>Placa: {vehicle.plate}</p>
            {renderCustomizations()}
            <button onClick={() => onSpawn(vehicle.id)}>Spawn</button>
        </div>
    );
};

export default VehicleCard;
