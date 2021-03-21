/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Helmet } from 'react-helmet';
// Styles
import { Grid } from 'styles';

export default function Test() {
  console.log('22222222');
  return (
    <div>
      <Helmet>
        <title>test2</title>
      </Helmet>
      <Grid direction="column" justify="flex-start" align="flex-start">
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
        <p>TEST</p>
      </Grid>
    </div>
  );
}
