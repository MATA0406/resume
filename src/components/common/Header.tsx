/** @jsx jsx */
import { jsx } from '@emotion/react';
// Styles
import { Container, ArticleText } from 'styles';
// Logo
import Logo from 'images/github.png';

const breakpoints = [300, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export default function Header() {
  return (
    <Container
      direction="row"
      justify="space-between"
      alignItems="center"
      css={{
        paddingTop: 10,
        paddingBottom: 10,
        [mq[0]]: {
          paddingRight: 10,
          paddingLeft: 10,
        },
        [mq[1]]: {
          paddingRight: 25,
          paddingLeft: 25,
        },
        [mq[2]]: {
          paddingRight: 30,
          paddingLeft: 30,
        },
        [mq[3]]: {
          paddingRight: 40,
          paddingLeft: 40,
        },
        background: ['linear-gradient(72deg,#6f55ff,#bbf6ff)'],
        '&:hover': {
          opacity: 0.8,
        },
        '-webkit-box-shadow':
          '0px 1px 5px 3px #ccc' /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */,
        '-moz-box-shadow': '0px 1px 5px 3px #ccc' /* Firefox 3.5 - 3.6 */,
        'box-shadow': '0px 1px 5px 3px #ccc',
      }}
    >
      <ArticleText>Mata</ArticleText>
      <a href="https://github.com/MATA0406">
        <img src={Logo} width={40} height={40} alt="" />
      </a>
    </Container>
  );
}
