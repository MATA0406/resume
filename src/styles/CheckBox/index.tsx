/** @jsx jsx */
import { jsx } from '@emotion/react';
import { ReactNode } from 'react';
import 'assets/css/checkbox.css';

interface Props {
  id: string;
  children: ReactNode;
  [key: string]: any;
}

const CheckBox = ({ id, children, ...props }: Props) => {
  return (
    <div className="checkDiv">
      <input id={id} type="checkbox" {...props} />
      <label htmlFor={id}>
        <span></span>
        {children}
      </label>
    </div>
  );
};

export default CheckBox;
