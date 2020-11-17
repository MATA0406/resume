/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
// Components
import Header from './Header';
// Styles
import { Container, Grid, FloatingButton, Typography, Card } from 'styles';
// Images
import Github from 'images/github2.png';
import Rocket from 'images/rocket.png';
import Velog from 'images/velog.jpg';
import ArrowUp from 'images/arrow-up.svg';

interface Props {
  children: React.ReactNode;
}

export default function CommonLayout({ children }: Props) {
  const [isFloating, setIsFloating] = useState(false);
  return (
    <div>
      <Header />

      <Container
        direction="row"
        justify="center"
        css={{
          paddingTop: 60,
          '@media only screen and (min-width: 1024px)': {
            minWidth: 1700,
          },
        }}
      >
        <Grid xs={12} sm={10} md={8} lg={6}>
          {children}
        </Grid>
      </Container>

      <Container
        direction="column"
        justify="center"
        align="center"
        css={{
          '@media only screen and (min-width: 1024px)': {
            position: 'fixed',
            bottom: 50,
            marginLeft: 20,
          },
        }}
      >
        <Grid direction="column">
          <Card
            css={{
              maxWidth: 380,
              minWidth: 380,
              '@media only screen and (max-width: 1024px)': {
                maxWidth: 320,
                minWidth: 320,
              },
            }}
          >
            <h1
              css={{
                marginTop: 0,
                marginBottom: 0,
                fontSize: '2.5rem',
                textAlign: 'start',
              }}
            >
              Profile &#x1F385;
            </h1>
            <Container direction="column" justify="flex-start">
              <Grid direction="column" align="flex-start">
                <Typography css={{ fontSize: 18, fontWeight: 700 }}>
                  정진호
                </Typography>
                <Typography
                  css={{ fontSize: 16, color: '#ccc', marginBottom: 20 }}
                >
                  Front-End Developer
                </Typography>
                <Typography css={{ fontSize: 16 }}>
                  Mobile: 010 - 5722 - 0406
                </Typography>
                <Typography css={{ fontSize: 16 }}>
                  E-mail: jinho_46@naver.com
                </Typography>
              </Grid>
            </Container>
          </Card>
        </Grid>
      </Container>

      <FloatingButton
        background="white"
        css={{
          right: isFloating ? 200 : -100,
          bottom: 360,
          '@media only screen and (max-width: 1200px)': {
            right: isFloating ? 30 : -100,
            bottom: 310,
          },
          transition: '.900s all',
        }}
        onClick={() => window.open('https://velog.io/@wlsgh46')}
      >
        <img src={Velog} width={25} alt="" css={{ borderRadius: '50%' }} />
      </FloatingButton>
      <FloatingButton
        background="white"
        css={{
          right: isFloating ? 200 : -100,
          bottom: 290,
          '@media only screen and (max-width: 1200px)': {
            right: isFloating ? 30 : -100,
            bottom: 240,
          },
          transition: '.600s all',
        }}
        onClick={() => window.open('https://www.rocketpunch.com/@jjiinnhhoo46')}
      >
        <img src={Rocket} width={25} alt="" />
      </FloatingButton>
      <FloatingButton
        background="white"
        css={{
          right: isFloating ? 200 : -100,
          bottom: 220,
          '@media only screen and (max-width: 1200px)': {
            right: isFloating ? 30 : -100,
            bottom: 170,
          },
          transition: '.300s all',
        }}
        onClick={() => window.open('https://github.com/MATA0406/resume')}
      >
        <img src={Github} width={25} alt="" />
      </FloatingButton>

      <FloatingButton
        background="#4e61ff"
        onClick={() => setIsFloating(!isFloating)}
        css={{
          bottom: 150,
          '@media only screen and (max-width: 1200px)': {
            bottom: 100,
          },
        }}
      >
        +
      </FloatingButton>
      <FloatingButton
        background="white"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
      >
        <img src={ArrowUp} width={25} height={25} alt="" />
      </FloatingButton>
    </div>
  );
}
