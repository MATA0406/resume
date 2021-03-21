/** @jsx jsx */
import { jsx } from '@emotion/react';
// Components
import {
  SkillSection,
  ProfileSection,
  WorkExperience,
  Award,
  Certificate,
} from 'components/home';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>test1</title>
      </Helmet>
      <ProfileSection />
      <h1 css={{ marginTop: 60, fontSize: '2.5rem' }}>Skill &#x1F3A8;</h1>
      <SkillSection />
      <h1 css={{ marginTop: 60, fontSize: '2.5rem' }}>Experience &#x1F680;</h1>
      <WorkExperience />
      <h1 css={{ marginTop: 60, fontSize: '2.5rem' }}>Award &#x1F60A;</h1>
      <Award />
      <h1 css={{ marginTop: 60, fontSize: '2.5rem' }}>Certificate &#x1F4DC;</h1>
      <Certificate />
    </div>
  );
}
