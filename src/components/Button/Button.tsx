import {ReactNode} from 'react';
import './Button.css';

type PropsType = { children: ReactNode };

export const Button = ({children}:PropsType) => {
  return (
      <div className='button'>
        {children}
      </div>
  )
};
