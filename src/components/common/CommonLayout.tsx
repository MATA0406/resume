/** @jsx jsx */
import { jsx } from '@emotion/react';
// Components
import Header from './Header';
// Styles
import { Container, Grid } from 'styles';

interface Props {
  children: React.ReactNode;
}

export default function CommonLayout({ children }: Props) {
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
    </div>
  );
}
