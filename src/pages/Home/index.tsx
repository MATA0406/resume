import React from 'react';
// Styles
import { Row, Grid } from 'styles';

export default function Home() {
  return (
    <>
      <Row>
        <Grid xs={12} sm={3} md={3} lg={1}>
          1
        </Grid>
        <Grid xs={12} sm={3} md={3} lg={12}>
          1
        </Grid>
        <Grid xs={12} sm={3} md={3} lg={12}>
          1
        </Grid>
      </Row>
      <Row>
        <Grid xs={12} sm={3} md={3} lg={1}>
          1
        </Grid>
        <Grid xs={12} sm={3} md={3} lg={12}>
          1
        </Grid>
        <Grid xs={12} sm={3} md={3} lg={12}>
          1
        </Grid>
      </Row>
    </>
  );
}
