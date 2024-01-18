import React from 'react';
import './Loader.css';

export const Loader: React.FC = () => {
    return (
        <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
        </div>
    )
};
