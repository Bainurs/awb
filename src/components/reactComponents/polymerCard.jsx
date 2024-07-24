// src/components/HoverBlock.jsx
import React, { useState } from 'react';

const PolymerCard = ({ item, localImg, href, index }) => {
    const [isActive, setIsActive] = useState(false);

    const handleMouseEnter = () => {
        setIsActive(true);
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };

    return (
        <div 
            className={`flex absolute polymer-prop pos-${index+1} parallelogram ${isActive ? 'z-10' : '' }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}     
        >
            <div className="inline-flex items-center justify-between polymer-title">
                <div className="text-white polymer-text">{item.text}</div>
                <img src={localImg} alt="Свойство полимерного пола" className="polimer-img bg-white" />
                <div className={`subTitle ${isActive ? 'active' : ''}`}>
                    {item.subtitle}
                    <a href={href}>Скачать опросный лист</a>
                </div>
            </div>
        </div>
    );
};

export default PolymerCard;
