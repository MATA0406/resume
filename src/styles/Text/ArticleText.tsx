/** @jsx jsx */
import { jsx } from '@emotion/react';

const ArticleText = (props: any) => (
  <span
    css={{
      fontSize: props.fontSize ? props.size : 28,
      fontWeight: 400,
      color: 'white',
    }}
    {...props}
  />
);

export default ArticleText;
