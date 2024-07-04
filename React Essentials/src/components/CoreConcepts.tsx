import Section from './Section';
import CoreConcept from './CoreConcept';
import { CORE_CONCEPTS } from '../data';

const CoreConcepts = () => (
  <Section id='core-concepts' title='Core Concepts'>
    <ul>
      {CORE_CONCEPTS.map((concept, index) => (
        <CoreConcept {...concept} key={`core-concept-${index}`} />
      ))}
    </ul>
  </Section>
);

export default CoreConcepts;
