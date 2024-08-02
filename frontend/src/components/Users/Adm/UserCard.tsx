import './UserCard.css'

import React from 'react';
import './UserCard.css';

interface UserCardProps {
    title: string;
    placeholder: string;
    isSwitch: boolean;
    setIsSwitch: () => void;
    setUser: (user: string) => void;
    setPlate?: (plate: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ title, placeholder, isSwitch, setIsSwitch, setUser, setPlate }) => {
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (title === "ADM" && setPlate) {
            setPlate(e.target.value);
        } else {
            setUser(e.target.value);
        }
    };

    const handleChangeSwitch = () => {
        setUser(title === "ADM" ? "admin" : "");
        setIsSwitch();
    };

    return (
        <div className="user-card">
            <h3>{title}</h3>
            <label className="switch">
                <input type="checkbox" checked={isSwitch} onChange={handleChangeSwitch} />
                <span className="slider"></span>
            </label>
            {isSwitch && <input type="text" placeholder={placeholder} className="search-input" onChange={handleChangeInput} />}
        </div>
    );
};

export default UserCard;
