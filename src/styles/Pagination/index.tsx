/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useEffect, useState } from 'react';
import _ from 'lodash';
// Styles
import { Grid } from 'styles';
import { ReactComponent as DoubleArrowLeft } from 'assets/svgs/double_arrow_left.svg';
import { ReactComponent as ArrowLeft } from 'assets/svgs/arrow_left.svg';
import { ReactComponent as ArrowRight } from 'assets/svgs/arrow_right.svg';
import { ReactComponent as DoubleArrowRight } from 'assets/svgs/double_arrow_right.svg';

interface Props {
  count: number;
  page: number;
  onChangePage: any;
  [key: string]: any;
}

const Pagination = ({
  count,
  page,
  onChangePage,
  control,
  styles,
  ...props
}: Props) => {
  const [pageBox, setPageBox] = useState<number[]>([]);

  useEffect(() => {
    // Pagination 버튼 처리
    if (count <= 5) {
      setPageBox(_.range(1, count + 1));
    } else {
      if (page >= count - 2) {
        setPageBox(_.range(count - 4, count + 1));
      } else if (page < 4) {
        setPageBox(_.range(1, 6));
      } else {
        setPageBox(_.range(page - 2, page + 3));
      }
    }
  }, [page, count]);

  return (
    <Grid
      direction="row"
      justify="center"
      align="center"
      css={{ marginTop: 30 }}
      {...props}
    >
      <div
        css={{
          padding: 10,
          cursor: page !== 1 ? 'pointer' : 'unset',
          marginRight: 10,
        }}
        onClick={() => page !== 1 && onChangePage(1)}
      >
        <DoubleArrowLeft css={{ width: 14 }} />
      </div>
      <div
        css={{
          padding: 10,
          cursor: page !== 1 ? 'pointer' : 'unset',
          marginRight: 20,
        }}
        onClick={() => page !== 1 && onChangePage(page - 1)}
      >
        <ArrowLeft css={{ width: 7 }} />
      </div>

      {pageBox.map((item, index) => (
        <div
          key={`page_item_${index}`}
          css={{ padding: 10, cursor: 'pointer', marginRight: 10 }}
          onClick={() => onChangePage(item)}
        >
          <span css={{ fontSize: 16, color: page === item ? '#000' : '#999' }}>
            {item}
          </span>
        </div>
      ))}

      <div
        css={{
          padding: 10,
          cursor: page < count ? 'pointer' : 'unset',
          marginRight: 10,
        }}
        onClick={() => page < count && onChangePage(page + 1)}
      >
        <ArrowRight css={{ width: 7 }} />
      </div>
      <div
        css={{ padding: 10, cursor: page < count ? 'pointer' : 'unset' }}
        onClick={() => page < count && onChangePage(count)}
      >
        <DoubleArrowRight css={{ width: 14 }} />
      </div>
    </Grid>
  );
};

export default Pagination;
