import React, { useState } from 'react';
import useVehicles from './hooks/useVehicles';
import VehicleService from './services/VehicleService';
import UserPanel from './components//Users/UserPanel';
import VehicleList from './components/Vehicles/VehicleList';
import Title from './components/Title';
import "./App.css"
import { Vehicle } from './types/Vehicle';

const App: React.FC = () => {
  const [ownerId, setOwnerId] = useState("admin");
  const { vehicles, loading, error } = useVehicles(ownerId);
  const [filter, setFilter] = useState("");

  const filterVehicles = (plate: string) => {
    if (filter !== "") {
      return vehicles.filter((vehicle) => vehicle.plate.includes(plate));
    } else {
      return vehicles;
    }
  };

  const handleSpawn = async (vehicle: Vehicle) => {
    try {
      await VehicleService.spawnVehicle(vehicle);
      alert('Vehicle spawned successfully!');
    } catch (err) {
      console.error('Failed to spawn vehicle:', err);
      alert('Failed to spawn vehicle.');
    }
  };

  const handleDespawn = async (vehicle: Vehicle) => {
    try {
      await VehicleService.despawnVehicle(vehicle);
      alert('Vehicle despawned successfully!');
    } catch (err) {
      console.error('Failed to despawn vehicle:', err);
      alert('Failed to despawn vehicle.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading vehicles: {error.message}</p>;

  return (
    <div className="App">
      <Title />
      <UserPanel setUser={setOwnerId} setPlate={setFilter} />
      <VehicleList vehicles={filterVehicles(filter)} onSpawn={handleSpawn} onDespawn={handleDespawn} />
    </div>
  );
};

export default App;
