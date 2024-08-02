// import { useState } from 'react';
import './AdmCard.css'

interface UserCard {
    title: string,
    placeholder: string,
    isSwitch: boolean,
    setIsSwitch: () => void;
}

const AdmCard: React.FC<UserCard> = ({ title, placeholder, isSwitch, setIsSwitch }) => {
    return (
        <div className="user-card">
            <h3>{title}</h3>
            <label className="switch">
                <input type="checkbox" checked={isSwitch} onChange={setIsSwitch} />
                <span className="slider"></span>
            </label>
            {isSwitch && <input type="text" placeholder={placeholder} className="search-input" />}
        </div>
    );
};

export default AdmCard;