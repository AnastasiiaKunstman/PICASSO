import { FC } from 'react';
import { useLocation } from 'react-router-dom';

const Header: FC = () => {
    const location = useLocation();

    const headerText = location.pathname === '/' ? 'All Posts:' : '';

    return (
        <header>
            <h1>{headerText}</h1>
        </header>
    )
};

export default Header;