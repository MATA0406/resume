/** @jsx jsx */
import { jsx } from '@emotion/react';
// Components
import SkillSection from 'components/home/SkillSection'
import ProfileSection from 'components/home/ProfileSection'
// Styles
import { Divider } from 'styles';

export default function Home() {
  return (
    <div>
      <ProfileSection/>
      <Divider />
      <h1 css={{ marginTop: 60 }}>Skill &#x1F3A8;</h1>
      <SkillSection />
      <Divider />
      <h1 css={{ marginTop: 60 }}>경력 &#x1F680;</h1>
    </div>
  );
}
