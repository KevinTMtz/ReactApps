import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import TabContent from './components/TabContent';
import { CORE_CONCEPTS, EXAMPLES } from './data';

const App = () => {
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
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcept {...concept} key={`core-concept-${index}`} />
            ))}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {topicTitles.map((title, index) => (
              <TabButton
                isSelected={topic === title.code}
                onClick={() => handleSelect(title.code)}
                key={`example-${title.code}-${index}`}
              >
                {title.text}
              </TabButton>
            ))}
          </menu>
          <TabContent example={EXAMPLES[topic]} />
        </section>
      </main>
    </div>
  );
};

export default App;
