import { Section } from './Section';
import { Heading } from './Heading';
import { RecentPosts } from './RecentPosts';

export function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}
