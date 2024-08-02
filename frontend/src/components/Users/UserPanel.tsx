import { useState } from "react";
import AdmCard from "./Adm/AdmCard";
import './UserPanel.css'

interface UserPanelProps {
    setUser: (user: string) => void
    setPlate: (user: string) => void
}

const UserPanel: React.FC<UserPanelProps> = ({ setUser, setPlate }) => {
    const [isAdmSwitchOn, setIsAdmSwitchOn] = useState<boolean>(true);

    const handleAdmSwitchChange = () => {
        setIsAdmSwitchOn(true);
    };

    const handleUserSwitchChange = () => {
        setIsAdmSwitchOn(false);
    };

    const handleChangeUser = (user: string) => {
        setUser(user)
    }

    const handleSearchAdm = (plate: string) => {
        setPlate(plate)
    }

    return (
        <div className="user-panel">
            <AdmCard
                title="ADM"
                placeholder="Placa"
                isSwitch={isAdmSwitchOn}
                setIsSwitch={handleAdmSwitchChange}
                setUser={handleChangeUser}
                setPlate={handleSearchAdm}
            />
            <AdmCard
                title="User"
                placeholder="Usuário"
                isSwitch={!isAdmSwitchOn}
                setIsSwitch={handleUserSwitchChange}
                setUser={handleChangeUser}
            />
        </div>
    );
};

export default UserPanel;