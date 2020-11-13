/** @jsx jsx */
import { jsx } from '@emotion/react';
// Styles
import { Container, Grid, Divider, Card } from 'styles';
// Image
import Profile from 'images/profile.jpg';
import React from 'images/react.png';
import Redux from 'images/redux.png';
import Typescript from 'images/typescript.png';
import Javacript from 'images/javascript.png';
import Html from 'images/html.jpg';
import Css from 'images/css.png';
import Material from 'images/material.png';
import Bootstrap from 'images/bootstrap.jpg';
import Emotion from 'images/emotion.png';
import Jest from 'images/jest.png';

export default function Home() {
  return (
    <div>
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
              // textAlign: 'start',
              fontWeight: 700,
              fontSize: '3rem',
            }}
          >
            안녕하세요.
          </h1>
          <h1
            css={{
              margin: 0,
              // textAlign: 'start',
              fontWeight: 700,
              fontSize: '3rem',
            }}
          >
            정진호 입니다.
          </h1>
        </Grid>
      </Container>

      <Divider />

      <h1 css={{ marginTop: 60 }}>Skill &#x1F3A8;</h1>

      <Container
        direction="row"
        justify="center"
        align="flex-start"
        css={{ boxSizing: 'inherit' }}
      >
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={React} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Redux} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Typescript} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Javacript} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Html} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Css} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
      </Container>

      <Container
        direction="row"
        justify="center"
        align="flex-start"
        css={{ boxSizing: 'inherit' }}
      >
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Material} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Bootstrap} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Emotion} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Jest} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
        {/* <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Html} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid>
        <Grid css={{ boxSizing: 'inherit', marginBottom: 60 }}>
          <Card css={{ width: 100, height: 100 }}>
            <img src={Css} css={{ width: 100, height: 100 }} />
          </Card>
        </Grid> */}
      </Container>
    </div>
  );
}
