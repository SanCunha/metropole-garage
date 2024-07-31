import { Router } from 'express';
import { getVehicles, spawnVehicle } from '../controllers/vehicleController';

const router = Router();

router.get('/vehicles', getVehicles);
router.post('/vehicles/spawn', spawnVehicle);

export default router;
