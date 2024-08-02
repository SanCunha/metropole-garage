// import { useState } from 'react';
import './AdmCard.css'

interface UserCard {
    title: string,
    placeholder: string,
    isSwitch: boolean,
    setIsSwitch: () => void;
    setUser: (user: string) => void
    setPlate?: (plate: string) => void
}

const AdmCard: React.FC<UserCard> = ({ title, placeholder, isSwitch, setIsSwitch, setUser, setPlate }) => {

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (title == "ADM") {
            if (setPlate)
                setPlate(e.target.value)
        } else {
            setUser(e.target.value)
        }
    }

    const handleChangeSwitch = () => {
        if (title == "ADM") {
            setUser("admin")
            setIsSwitch()
        }
        else {
            setUser("")
            setIsSwitch()
        }

    }

    return (
        <div className="user-card">
            <h3>{title}</h3>
            <label className="switch">
                <input type="checkbox" checked={isSwitch} onChange={handleChangeSwitch} />
                <span className="slider"></span>
            </label>
            {isSwitch && <input type="text" placeholder={placeholder} className="search-input" onChange={(e) => handleChangeInput(e)} />}
        </div>
    );
};

export default AdmCard;