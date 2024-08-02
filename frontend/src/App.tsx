import VehicleList from './components/Vehicles/VehicleList';
import useVehicles from './hooks/useVehicles';
import { spawnVehicle } from './services/api';
import './App.css';
import Title from './components/Title';
import UserPanel from './components/Users/UserPanel';
import { useState } from 'react';

const App: React.FC = () => {
  const [ownerId, setOwnerId] = useState("admin")
  // const ownerId = 'player_steam_id'; // Substitua pelo ID real do jogador
  const { vehicles, loading, error } = useVehicles(ownerId);

  const handleSpawn = async (vehicleId: number) => {
    try {
      await spawnVehicle(vehicleId);
      alert('Vehicle spawned successfully!');
    } catch (err) {
      console.error('Failed to spawn vehicle:', err);
      alert('Failed to spawn vehicle.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading vehicles: {error.message}</p>;

  return (
    <div className="App">
      <Title />
      <UserPanel />
      <VehicleList vehicles={vehicles} onSpawn={handleSpawn} />
    </div>
  );
};

export default App;
