/** @jsx jsx */
import { jsx } from '@emotion/react';

interface Props {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  children: any;
  [key: string]: any;
}

const Container = (props: Props) => (
  <div
    css={{
      display: 'flex',
      // 'flex-wrap': 'wrap',
      flexDirection: props.direction && props.direction,
      justifyContent: props.justify && props.justify,
      alignItems: props.alignItems && props.alignItems,
    }}
    {...props}
  />
);

export default Container;
