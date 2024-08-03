import { useState } from "react";
import UserCard from "./Card/UserCard";
import './UserPanel.css'

interface UserPanelProps {
    setUser: (user: string) => void;
    setPlate: (plate: string) => void;
}

const UserPanel: React.FC<UserPanelProps> = ({ setUser, setPlate }) => {
    const [isAdmSwitchOn, setIsAdmSwitchOn] = useState<boolean>(true);

    const handleAdmSwitchChange = () => setIsAdmSwitchOn(true);
    const handleUserSwitchChange = () => setIsAdmSwitchOn(false);

    return (
        <div className="user-panel">
            {/* <UserCard
                title="ADM"
                placeholder="Placa"
                isSwitch={isAdmSwitchOn}
                setIsSwitch={handleAdmSwitchChange}
                setUser={setUser}
                setPlate={setPlate}
            /> */}
            <UserCard
                title="User"
                placeholder="Usuário"
                isSwitch={!isAdmSwitchOn}
                setIsSwitch={handleUserSwitchChange}
                setUser={setUser}
            />
        </div>
    );
};

export default UserPanel;