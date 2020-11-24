/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Fragment } from 'react';
// Styles
import { Container, Grid, Typography } from 'styles';

export default function Certificate() {
  return (
    <Fragment>
      <Container
        direction="row"
        justify="flex-start"
        css={{
          '@media only screen and (max-width: 1024px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Grid direction="column" css={{ minWidth: 300 }} lg={5}>
          <h1 css={{ marginBottom: 0 }}>한국산업인력공단</h1>
          <Typography css={{ color: '#ccc' }}>2011. 07 취득</Typography>
        </Grid>
        <Grid direction="column" lg={6} css={{ paddingBottom: 60 }}>
          <Fragment>
            <h1
              css={{
                marginBottom: 0,
                '@media only screen and (max-width: 1024px)': {
                  fontSize: 24,
                },
              }}
            >
              정보기기운용기능사
            </h1>
            {/* <Typography css={{ marginBottom: 15, color: '#ccc' }}>
              2018. 07
            </Typography>
            <Typography>- 재능 공유 플랫폼</Typography> */}
          </Fragment>
        </Grid>
      </Container>
    </Fragment>
  );
}
