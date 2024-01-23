import {FC} from 'react';
import './Button.css';

type PropsType = { children: string };

const Button:FC<PropsType> = ({children}) => {
  return (
      <div className='button'>
        {children}
      </div>
  )
};

export default Button;