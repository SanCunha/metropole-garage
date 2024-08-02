import React, { useState } from 'react';
import useVehicles from './hooks/useVehicles';
import VehicleService from './services/VehicleService';
import UserPanel from './components//Users/UserPanel';
import VehicleList from './components/Vehicles/VehicleList';
import Title from './components/Title';
import "./App.css"

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

  const handleSpawn = async (vehicleId: number) => {
    try {
      await VehicleService.spawnVehicle(vehicleId);
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
      <UserPanel setUser={setOwnerId} setPlate={setFilter} />
      <VehicleList vehicles={filterVehicles(filter)} onSpawn={handleSpawn} />
    </div>
  );
};

export default App;
