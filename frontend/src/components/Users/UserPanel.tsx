import { useState } from "react";
import AdmCard from "./Adm/AdmCard";
import './UserPanel.css'

const UserPanel: React.FC = () => {
    const [isAdmSwitchOn, setIsAdmSwitchOn] = useState<boolean>(true);

    const handleAdmSwitchChange = () => {
        setIsAdmSwitchOn(true);
    };

    const handleUserSwitchChange = () => {
        setIsAdmSwitchOn(false);
    };

    return (
        <div className="user-panel">
            <AdmCard
                title="ADM"
                placeholder="Placa"
                isSwitch={isAdmSwitchOn}
                setIsSwitch={handleAdmSwitchChange}
            />
            <AdmCard
                title="User"
                placeholder="Usuário"
                isSwitch={!isAdmSwitchOn}
                setIsSwitch={handleUserSwitchChange}
            />
        </div>
    );
};

export default UserPanel;