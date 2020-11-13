/** @jsx jsx */
import { jsx } from '@emotion/react';

const Card = (props: any) => (
  <div
    css={{
      padding: 12,
      borderRadius: 4,
      background: '#fff',
      boxShadow:
        '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    }}
    {...props}
  />
);

export default Card;
