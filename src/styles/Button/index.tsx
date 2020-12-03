/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
  onClick?: () => void;
  [key: string]: any;
}

const Button = ({ children, onClick, ...props }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      css={{
        padding: 10,
        borderRadius: 5,
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        color: 'white',
        background: isHover ? '#555' : '#000',
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
