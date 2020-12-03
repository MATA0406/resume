/** @jsx jsx */
import { jsx } from '@emotion/react';
// Styles
import { Container } from 'styles';
// Logo
// import Logo from 'images/github.png';

const breakpoints = [300, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export default function Header() {
  return (
    <Container
      direction="row"
      justify="space-between"
      alignitems="center"
      css={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 4,
        paddingBottom: 4,
        zIndex: 10,
        // [mq[0]]: {
        //   paddingRight: 10,
        //   paddingLeft: 10,
        // },
        // [mq[1]]: {
        //   paddingRight: 25,
        //   paddingLeft: 25,
        // },
        // [mq[2]]: {
        //   paddingRight: 30,
        //   paddingLeft: 30,
        // },
        // [mq[3]]: {
        //   paddingRight: 40,
        //   paddingLeft: 40,
        // },
        background: ['linear-gradient(72deg,black,#fff)'],
        '&:hover': {
          opacity: 0.8,
        },
        // background: 'black',
        boxShadow: 'rgba(40,50,60,.06)',
        // '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      }}
    >
      {/* <ArticleText>J.H Jung</ArticleText> */}
      {/* <a href="https://github.com/MATA0406">
        <img src={Logo} width={40} height={40} alt="" />
      </a> */}
    </Container>
  );
}
