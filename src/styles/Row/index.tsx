/** @jsx jsx */
import { jsx } from '@emotion/react';

// interface Props {
//   direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
//   justify?:
//     | 'flex-start'
//     | 'center'
//     | 'flex-end'
//     | 'space-between'
//     | 'space-around'
//     | 'space-evenly';
//   alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
//   children: any;
//   [key: string]: any;
// }

const Row = (props: any) => (
  <div
    css={{
      width: '100%',
      flex: 'auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
    {...props}
  />
);

export default Row;
