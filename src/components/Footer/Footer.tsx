import { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
    return (
        <footer>
            <a className='footer_telegram' target='_blank' rel='noreferrer' href='https://t.me/anastasiiakunstman' />
            <a className='footer_github' target='_blank' rel='noreferrer' href='https://github.com' />
            <p>Anastasiia Kunstman х PICASSO © {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;