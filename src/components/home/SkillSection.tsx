/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Fragment } from 'react';
// Styles
import { Container, Grid, ImageCard } from 'styles';
// Image
import React from 'images/react.png';
import Redux from 'images/redux.png';
import Saga from 'images/saga.png';
import Material from 'images/material.png';
import Bootstrap from 'images/bootstrap.jpg';
import Emotion from 'images/emotion.png';
import Typescript from 'images/typescript.png';
import Javascript from 'images/javascript.png';
import Html from 'images/html.jpg';
import Css from 'images/css.png';
import Github from 'images/github.png';
import Jest from 'images/jest.png';

interface ImageInfo {
  name: string;
  image: string;
}

const IMAGES: ImageInfo[] = [
  {
    name: 'React',
    image: React,
  },
  {
    name: 'Redux',
    image: Redux,
  },
  {
    name: 'Redux Saga',
    image: Saga,
  },
  {
    name: 'Material UI',
    image: Material,
  },
  {
    name: 'Bootstrap',
    image: Bootstrap,
  },
  {
    name: 'Emotion',
    image: Emotion,
  },
  {
    name: 'Typescript',
    image: Typescript,
  },
  {
    name: 'Javascript',
    image: Javascript,
  },
  {
    name: 'Html',
    image: Html,
  },
  {
    name: 'CSS',
    image: Css,
  },
  {
    name: 'Jest',
    image: Jest,
  },
  {
    name: 'Github',
    image: Github,
  },
];

export default function SkillSection() {
  return (
    <Fragment>
      <Container
        direction="row"
        justify="center"
        align="flex-start"
        css={{ marginBottom: 80 }}
      >
        {IMAGES?.length > 0 &&
          IMAGES.map((item) => (
            <Grid key={item.name}>
              <ImageCard imageInfo={item} />
            </Grid>
          ))}
      </Container>
    </Fragment>
  );
}
