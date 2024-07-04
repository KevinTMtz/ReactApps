import { useState } from 'react';

import TabContent from './TabContent';
import Section from './Section';
import Tabs from './Tabs';
import { EXAMPLES } from '../data';

const Examples = () => {
  const [topic, setTopic] = useState<string>('components');

  const topicTitles = [
    { code: 'components', text: 'Components' },
    { code: 'jsx', text: 'JSX' },
    { code: 'props', text: 'Props' },
    { code: 'state', text: 'State' },
  ];

  const handleSelect = (topic: string) => {
    setTopic(topic);
  };

  return (
    <Section id='examples' title='Examples'>
      <Tabs
        current={topic}
        labels={topicTitles}
        handleSelect={handleSelect}
        Container='menu'
      />
      <TabContent example={EXAMPLES[topic]} />
    </Section>
  );
};

export default Examples;
