import { Request, Response } from "express";
import {
  getVehiclesByOwner,
  spawnVehicleById,
  updateVehicle,
} from "../services/vehicleService";

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
  res
    .status(200)
    .json({ message: "Vehicle despawned successfully", despawnedVehicle });
};
