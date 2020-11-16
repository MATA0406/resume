/** @jsx jsx */
import { jsx } from '@emotion/react';
// Components
import { SkillSection, ProfileSection, WorkExperience } from 'components/home';

export default function Home() {
  return (
    <div>
      <ProfileSection />
      <h1 css={{ marginTop: 60, fontSize: '2.5rem' }}>Skill &#x1F3A8;</h1>
      <SkillSection />
      <h1 css={{ marginTop: 60, fontSize: '2.5rem' }}>Experience &#x1F680;</h1>
      <WorkExperience />
    </div>
  );
}
