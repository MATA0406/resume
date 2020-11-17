/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Fragment } from 'react';
// Styles
import { Container, Grid, Typography } from 'styles';

export default function Award() {
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
          <h1 css={{ marginBottom: 0 }}>미래능력개발교육원</h1>
          <Typography css={{ color: '#ccc' }}>2017. 11 ~ 2018. 07</Typography>
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
              팀 프로젝트 경연 최우수상
            </h1>
            <Typography css={{ marginBottom: 15, color: '#ccc' }}>
              2018. 07
            </Typography>
            <Typography>- 재능 공유 플랫폼</Typography>
          </Fragment>
        </Grid>
      </Container>
    </Fragment>
  );
}
