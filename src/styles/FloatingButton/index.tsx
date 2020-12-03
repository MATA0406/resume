/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';

interface Props {
  background: string;
  onClick?: () => void;
  children: React.ReactNode;
  [key: string]: any;
}

const FloatingButton = ({ children, background, onClick, ...props }: Props) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      css={{
        position: 'fixed',
        right: 200,
        bottom: 80,
        '@media only screen and (max-width: 1200px)': {
          right: 35,
          bottom: 60,
        },
      }}
      onClick={onClick}
      {...props}
    >
      <div
        css={{ position: 'relative' }}
        onMouseLeave={() => setIsHover(false)}
        onMouseOver={() => setIsHover(true)}
      >
        <button
          type="button"
          css={{
            outline: 'none',
            width: 50,
            height: 50,
            borderRadius: '50%',
            background,
            color: 'white',
            fontSize: 24,
            fontWeight: 100,
            boxShadow:
              '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
            filter: isHover ? 'brightness(80%)' : undefined,
            transition: '.30s all',
            cursor: 'pointer',
            border: 'none',
          }}
        ></button>
        <span
          css={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translateX(-48%) translateY(-57%)',
            fontSize: '2rem',
            cursor: 'pointer',
            color: 'white',
          }}
        >
          {children}
        </span>
      </div>
    </div>
  );
};

export default FloatingButton;
