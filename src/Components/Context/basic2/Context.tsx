import { Heading } from './components/Heading';
import { Post } from './components/Post';
import { Section } from './components/Section';
import { AllPosts } from './components/AllPosts';

import '../styles.css';

function ContextBasic2() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <Post title="Hello traveller!" body="Read about my adventures." />
      <AllPosts />
    </Section>
  );
}

export default ContextBasic2;
