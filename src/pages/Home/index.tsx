/** @jsx jsx */
import { jsx } from '@emotion/react';
// Components
import {
  SkillSection,
  ProfileSection,
  WorkExperience,
  Award,
} from 'components/home';
// Styles
import { Container, Grid, Typography, Card } from 'styles';

export default function Home() {
  return (
    <div>
      <ProfileSection />
      <h1 css={{ marginTop: 60, fontSize: '2.5rem' }}>Skill &#x1F3A8;</h1>
      <SkillSection />
      <h1 css={{ marginTop: 60, fontSize: '2.5rem' }}>Experience &#x1F680;</h1>
      <WorkExperience />
      <h1 css={{ marginTop: 60, fontSize: '2.5rem' }}>Award &#x1F60A;</h1>
      <Award />
      {/* <Container direction="column" justify="center" align="center">
        <Grid direction="column">
          <Card css={{ maxWidth: 400, minWidth: 400 }}>
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
                  E-mail: jinho_46@naver.com
                </Typography>
              </Grid>
            </Container>
          </Card>
        </Grid>
      </Container> */}
    </div>
  );
}
