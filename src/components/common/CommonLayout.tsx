/** @jsx jsx */
import { jsx } from '@emotion/react';
import { useState } from 'react';
// Components
import Header from './Header';
// Styles
import { Container, Grid, FloatingButton } from 'styles';
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
            minWidth: 1250,
          },
        }}
      >
        <Grid xs={12} sm={10} md={8} lg={6}>
          {children}
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
