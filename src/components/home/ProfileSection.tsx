/** @jsx jsx */
import { jsx } from '@emotion/react';
// Styles
import { Container, Grid, Typography } from 'styles';
// Image
import Profile from 'images/profile.jpg';

export default function ProfileSection() {
  return (
    <Container direction="column" justify="center" align="center">
      <Grid direction="column" justify="center" align="center">
        <div css={{ marginBottom: 20 }}>
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
        <Grid css={{ display: 'flex', padding: 0, marginTop: 30 }}>
          <Typography
            css={{
              fontSize: '1.8rem',
              textAlign: 'start',
              '@media only screen and (max-width: 768px)': {
                fontSize: '1.3rem',
              },
            }}
          >
            웹 프론트엔트{' '}
            <span css={{ color: '#0080ff', fontWeight: 700 }}>
              React, Typescript, ES6+, Emotion
            </span>
            에 관심이 많습니다. 원활한 소통으로 협업이 잘 이뤄져야 하며 코드
            리팩토링과 테스트를 통해 더욱 견고한 코드를 만드는 것에 가장 큰
            의미를 둔 개발자 정진호입니다.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
