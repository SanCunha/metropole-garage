import { Request, Response } from "express";
import { getVehiclesByOwner, updateVehicle } from "../services/vehicleService";
import {
  addVehicleInServer,
  removeVehicleInServer,
} from "../services/vehicleInServer";
import { vehicleRepository } from "../repositories/vehicleRepository";
import { VehicleInServer } from "../entities/VehicleInServer";
import { vehicleInServerRepository } from "../repositories/vehicleInServerRepository";
import axios from "axios";

export const getVehicles = async (
  req: Request,
  res: Response
): Promise<void> => {
  const owner = req.query.owner as string;
  try {
    const vehicles = await getVehiclesByOwner(owner);
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching vehicles", error });
  }
};

export const spawnVehicle = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.body;
  // try {
  //     const vehicle = await spawnVehicleById(vehicleId);
  //     if (vehicle) {
  //         res.status(200).json({ message: 'Vehicle spawned successfully', vehicle });
  //     } else {
  //         res.status(404).json({ message: 'Vehicle not found' });
  //     }
  // } catch (error) {
  //     res.status(500).json({ message: 'Error spawning vehicle', error });
  // }
  const spawnedVehicle = await updateVehicle(id, { spawned: true });
  await addVehicleInServer(id);
  await logger();
  try {
    // Envia a requisição ao servidor FiveM
    await axios.post("http://0.0.0.0:30120/spawn-vehicle", {
      vehicleModel: "adder",
      playerId: 1,
    });

    // res.status(200).send("Vehicle spawned successfully");
  } catch (error) {
    console.error("Failed to spawn vehicle:", error);
    // res.status(500).send("Failed to spawn vehicle");
  }
  res
    .status(200)
    .json({ message: "Vehicle spawned successfully", spawnedVehicle });
};

export const despawnVehicle = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.body;
  const despawnedVehicle = await updateVehicle(id, { spawned: false });
  await removeVehicleInServer(id);
  await logger();
  res
    .status(200)
    .json({ message: "Vehicle despawned successfully", despawnedVehicle });
};

const logger = async () => {
  const vehiclesInServer = await vehicleInServerRepository.find({
    relations: ["vehicle_owner_id", "vehicle_plate"],
  });
  console.log(vehiclesInServer);
  console.log(`Novo Registro: ${new Date()}`);
  console.log(`Carros no servidor: ${vehiclesInServer.length}`);
  console.log(`Modelo -- Placa -- Id_Carro`);
  for (const vehicle of vehiclesInServer) {
    console.log(
      `${vehicle.vehicle_plate.model} -- ${vehicle.vehicle_plate.plate} -- ${vehicle.vehicle_owner_id.id}`
    );
  }
  console.log(`#################################################`);
};
