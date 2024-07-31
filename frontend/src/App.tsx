import React from 'react';
import VehicleList from './components/VehicleList';
import useVehicles from './hooks/useVehicles';
import { spawnVehicle } from './services/api';
import './App.css';

const App: React.FC = () => {
  const ownerId = 'player_steam_id'; // Substitua pelo ID real do jogador
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
      <h1>Garage System</h1>
      <VehicleList vehicles={vehicles} onSpawn={handleSpawn} />
    </div>
  );
};

export default App;
