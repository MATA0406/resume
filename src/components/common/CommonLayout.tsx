/** @jsx jsx */
import { jsx } from '@emotion/react';
// Components
import Header from './Header';
// Styles
import { Container, Row } from 'styles';

interface Props {
  children: React.ReactNode;
}

export default function CommonLayout({ children }: Props) {
  return (
    <div>
      <Header />
      <Container
        direction="column"
        justify="center"
        alignItems="center"
        // css={{
        //   paddingTop: 10,
        //   paddingBottom: 10,
        //   [mq[0]]: {
        //     paddingRight: 10,
        //     paddingLeft: 10,
        //   },
        //   [mq[1]]: {
        //     paddingRight: 25,
        //     paddingLeft: 25,
        //   },
        //   [mq[2]]: {
        //     paddingRight: 30,
        //     paddingLeft: 30,
        //   },
        //   [mq[3]]: {
        //     paddingRight: 40,
        //     paddingLeft: 40,
        //   },
        //   background: ['linear-gradient(72deg,#6f55ff,#bbf6ff)'],
        //   '&:hover': {
        //     opacity: 0.8,
        //   },
        //   '-webkit-box-shadow':
        //     '0px 1px 5px 3px #ccc' /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */,
        //   '-moz-box-shadow': '0px 1px 5px 3px #ccc' /* Firefox 3.5 - 3.6 */,
        //   'box-shadow': '0px 1px 5px 3px #ccc',
        // }}
      >
        {children}
      </Container>
    </div>
  );
}
