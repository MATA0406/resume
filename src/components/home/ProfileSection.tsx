/** @jsx jsx */
import { jsx } from '@emotion/react';
// Styles
import { Container, Grid } from 'styles';
// Image
import Profile from 'images/profile.jpg';

export default function ProfileSection() {
  return (
      <Container
        direction="column"
        justify="center"
        align="center"
        css={{ boxSizing: 'inherit' }}
      >
        <Grid
          direction="column"
          justify="center"
          align="center"
          css={{ boxSizing: 'inherit', marginBottom: 60 }}
        >
          <div css={{ marginBottom: 40 }}>
            <img
              src={Profile}
              width={100}
              height={100}
              css={{
                borderRadius: 50,
                boxShadow:
                  '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
              }}
              alt=""
            />
          </div>
          <h1
            css={{
              margin: 0,
              fontWeight: 400,
              fontSize: '4rem',
              '@media only screen and (max-width: 768px)': {
                fontSize: '3rem',
              },
            }}
          >
            안녕하세요.
          </h1>
          <h1
            css={{
              margin: 0,
              fontWeight: 400,
              fontSize: '4rem',
              '@media only screen and (max-width: 768px)': {
                fontSize: '3rem',
              },
            }}
          >
            정진호 입니다.
          </h1>
        </Grid>
      </Container>
  );
}
