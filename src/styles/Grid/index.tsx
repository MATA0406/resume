/** @jsx jsx */
import { jsx } from '@emotion/react';

const calcWidthPercent = (span: any) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

// const BREAK_POINT_MOBILE = 768;
// const BREAK_POINT_TABLET = 992;
// const BREAK_POINT_PC = 1200;

const Grid = (props: any) => (
  <div
    css={{
      display: (props.direction || props.justify || props.alignitems) && 'flex',
      flexDirection: props.direction && props.direction,
      justifyContent: props.justify && props.justify,
      alignItems: props.alignitems && props.alignitems,
      padding: 12,
      boxSizing: 'border-box',
      flexBasis: `${props.xs ? `${calcWidthPercent(props.xs)}%` : `auto`}`,
      '@media only screen and (min-width: 420px)': {
        flexBasis: `${props.sm ? `${calcWidthPercent(props.sm)}%` : 'auto'}`,
      },
      '@media only screen and (min-width: 768px)': {
        flexBasis: `${props.md ? `${calcWidthPercent(props.md)}%` : 'auto'}`,
      },
      '@media only screen and (min-width: 1024px)': {
        flexBasis: `${props.lg ? `${calcWidthPercent(props.lg)}%` : 'auto'}`,
      },
    }}
    {...props}
  />
);

export default Grid;
