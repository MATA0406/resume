/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

const Button = ({ children, onClick, ...props }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      css={{
        padding: 10,
        borderRadius: 5,
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        color: 'white',
        background: '#00dacb',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        // background: isHover ? '#555' : '#000',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
