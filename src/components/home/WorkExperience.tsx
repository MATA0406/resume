/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Fragment } from 'react';
// Styles
import { Container, Grid, Divider, Typography } from 'styles';

export default function WorkExperience() {
  return (
    <Fragment>
      <Container
        direction="row"
        justify="center"
        css={{
          '@media only screen and (max-width: 1024px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Grid direction="column" css={{ minWidth: 300 }} lg={4}>
          <h1 css={{ marginBottom: 0 }}>라이앤캐처스</h1>
          <Typography>Frontend Developer</Typography>
          <Typography css={{ color: '#ccc' }}>2020. 02 ~ 현재</Typography>
        </Grid>
        <Grid direction="column" lg={6} css={{ paddingBottom: 60 }}>
          <Fragment>
            <h1
              css={{
                marginBottom: 0,
                '@media only screen and (max-width: 1024px)': {
                  fontSize: 24,
                },
              }}
            >
              화해 관리자 Back Office
            </h1>
            <Typography>화해(버드뷰)</Typography>
            <Typography css={{ marginBottom: 15, color: '#ccc' }}>
              2020. 09 ~ 2020. 11
            </Typography>
            <Typography>
              - 화해 관리자 Back Office 프론트 개발을 담당하였습니다.
            </Typography>
            <Typography>1. React.js 사용</Typography>
            <Typography>2. Hook, useForm 사용</Typography>
            <Typography>
              3. Typescript를 사용하여 Type 체크 및 코드 어시스트 지원
            </Typography>
            <Typography>
              4. Bootstrap, ReactStrap 기반의 UI 프레임워크 사용
            </Typography>
            <Typography>
              5. Redux, Redux Persist, Redux logger를 사용하여 Global 상태 관리
            </Typography>
            <Typography>
              6. ESList, Prettier를 사용하여 팀원들과의 코드 차이 개선, 깔끔한
              코드 구축
            </Typography>
            <Typography>7. Gitlab, Github를 통한 소스 코드 관리</Typography>
          </Fragment>

          <Fragment>
            <h1
              css={{
                marginBottom: 0,
                marginTop: 60,
                '@media only screen and (max-width: 1024px)': {
                  fontSize: 24,
                },
              }}
            >
              비블리
            </h1>
            <Typography>라이앤캐처스</Typography>
            <Typography css={{ marginBottom: 15, color: '#ccc' }}>
              2020. 06 ~ 2020. 08
            </Typography>
            <Typography>
              - 오직 나만을 위한 책 추천 인공지능 서점 앱 개발
            </Typography>
            <Typography>1. React Native 사용</Typography>
            <Typography>2. React hook, Custom Hook, useForm 사용</Typography>
            <Typography>3. useContext를 사용하여 Global 상태 관리</Typography>
            <Typography>4. HOC를 사용하여 반복적인 코드 재사용</Typography>
            <Typography>5. Zeplin으로 디자인 참조</Typography>
            <Typography>6. Gitlab으로 소스 코드 관리</Typography>
          </Fragment>
        </Grid>
      </Container>

      <Divider css={{ height: 2 }} />

      <Container
        direction="row"
        justify="center"
        css={{
          '@media only screen and (max-width: 1024px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Grid direction="column" css={{ minWidth: 300 }} lg={4}>
          <h1 css={{ marginBottom: 0 }}>펜타웍스</h1>
          <Typography>Frontend Developer</Typography>
          <Typography css={{ color: '#ccc' }}>2018. 08 ~ 2019. 09</Typography>
        </Grid>
        <Grid direction="column" lg={6} css={{ paddingBottom: 60 }}>
          <Fragment>
            <h1
              css={{
                marginBottom: 0,
                '@media only screen and (max-width: 1024px)': {
                  fontSize: 24,
                },
              }}
            >
              WUC
            </h1>
            <Typography>Ericsson-LG</Typography>
            <Typography css={{ marginBottom: 15, color: '#ccc' }}>
              2019. 04 ~ 2019. 08
            </Typography>
            <Typography>
              - 기업에서 사용되는 보이스챗 프로젝트이며 영상통화 및 채팅을 할 수
              있습니다.
            </Typography>
            <Typography>1. React.js 기반의 프론트엔드 담당</Typography>
            <Typography>2. Flow를 사용한 Type 체크</Typography>
            <Typography>3. Material UI 적용</Typography>
            <Typography>
              4. ESLint, Prettier를 사용하여 팀원들과의 코드 차이 개선, 깔끔한
              코드 구축
            </Typography>
            <Typography>5. immutable.js를 사용한 최적화</Typography>
            <Typography>6. Git을 통한 코드관리 코드 구축</Typography>
            <Typography>7. Zeplin으로 디자인 소통</Typography>
          </Fragment>

          <Fragment>
            <h1
              css={{
                marginBottom: 0,
                marginTop: 60,
                '@media only screen and (max-width: 1024px)': {
                  fontSize: 24,
                },
              }}
            >
              장비 관리 시스템
            </h1>
            <Typography>펜타웍스</Typography>
            <Typography css={{ marginBottom: 15, color: '#ccc' }}>
              2019. 03 ~ 2019. 04
            </Typography>
            <Typography>
              - 사내장비관리시스템입니다. 프론트 엔드를 담당하였습니다.
            </Typography>
            <Typography>
              1. React.js 기반의 프론트엔드 전체 부분 담당
            </Typography>
            <Typography>
              2. Redux, Redux-saga를 사용한 데이터 상태 관리
            </Typography>
            <Typography>3. Bootstrap을 사용하여 UI 구축</Typography>
            <Typography>4. 반응형 웹, 모바일 웹 구축</Typography>
            <Typography>5. git을 사용한 코드 관리</Typography>
          </Fragment>

          <Fragment>
            <h1
              css={{
                marginBottom: 0,
                marginTop: 60,
                '@media only screen and (max-width: 1024px)': {
                  fontSize: 24,
                },
              }}
            >
              GNCMS
            </h1>
            <Typography>굿네이버스</Typography>
            <Typography css={{ marginBottom: 15, color: '#ccc' }}>
              2018. 08 ~ 2019. 02
            </Typography>
            <Typography>- 결연아동을 관리하는 Back office입니다.</Typography>
            <Typography>1. JQuery 기반의 프론트엔드 담당</Typography>
            <Typography>2. Trello를 사용하여 태스크 관리</Typography>
            <Typography>3. SVN을 사용하여 코드 관리</Typography>
            <Typography>4. Bootstrap을 이용한 UI 구축</Typography>
          </Fragment>
        </Grid>
      </Container>
    </Fragment>
  );
}
