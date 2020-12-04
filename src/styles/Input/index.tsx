/** @jsx jsx */
import { jsx } from '@emotion/react';

interface Props {
  type: string;
  [key: string]: any;
}

const Input = ({ type, ...props }: Props) => {
  return (
    <input
      type={type}
      css={{
        display: 'flex',
        height: 60,
        padding: 18,
        border: 'solid 1px #e1e1e1',
        borderRadius: 5,
        fontSize: 20,
        color: '#6c7474',
        '::placeholder': {
          color: '#cdcdcd',
        },
        ':focus': {
          outline: 'none',
          border: 'solid 1px #e1e1e1',
        },
      }}
      {...props}
    />
  );
};

export default Input;
