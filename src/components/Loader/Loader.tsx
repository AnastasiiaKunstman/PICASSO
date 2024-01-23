import { FC } from 'react';
import './Loader.css';

const Loader: FC = () => {
    return (
        <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
        </div>
    )
};

export default Loader;