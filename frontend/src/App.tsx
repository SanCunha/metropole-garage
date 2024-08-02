import VehicleList from './components/Vehicles/VehicleList';
import useVehicles from './hooks/useVehicles';
import { spawnVehicle } from './services/api';
import './App.css';
import Title from './components/Title';
import UserPanel from './components/Users/UserPanel';
import { useState } from 'react';
import { Vehicle } from './types/Vehicle';

const App: React.FC = () => {
  const [ownerId, setOwnerId] = useState("admin")
  const { vehicles, loading, error } = useVehicles(ownerId);

  const [filter, setFilter] = useState("")

  const filterVehicles = (plate: string) => {
    console.log({ ownerId, vehicles, filter })
    if (filter != "") {
      const filteredVehicles = vehicles.filter((element: Vehicle) => element.plate.includes(plate));
      return filteredVehicles
    }
    else {
      return vehicles
    }

  };

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
      <UserPanel setUser={setOwnerId} setPlate={setFilter} />
      <VehicleList vehicles={filterVehicles(filter)} onSpawn={handleSpawn} />
    </div>
  );
};

export default App;
