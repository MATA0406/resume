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
      float: 'left',
      // margin: 2,
      // padding: '1rem',
      background: '#ccc',

      width: `${props.xs ? `${calcWidthPercent(props.xs)}%` : `100%`}`,
      '@media only screen and (min-width: 768px)': {
        width: `${props.sm && `${calcWidthPercent(props.sm)}%`}`,
      },
      '@media only screen and (min-width: 992px)': {
        width: `${props.md && `${calcWidthPercent(props.md)}%`}`,
      },
      '@media only screen and (min-width: 1200px)': {
        width: `${props.lg && `${calcWidthPercent(props.lg)}%`}`,
      },
      // width: `${props.span ? (props.span / 12) * 100 : '8.33'}%`,
      // '@media only screen and (max-width: 768px)': {
      //   width: '100%',
      // },
    }}
    {...props}
  />
);

export default Grid;
