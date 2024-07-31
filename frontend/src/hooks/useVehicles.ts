import { useEffect, useState } from 'react';
import { Vehicle } from '../types/Vehicle';
import { getVehicles } from '../services/api';

const useVehicles = (ownerId: string) => {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const data = await getVehicles(ownerId);
                setVehicles(data);
            } catch (err:any) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchVehicles();
    }, [ownerId]);

    return { vehicles, loading, error };
};

export default useVehicles;
