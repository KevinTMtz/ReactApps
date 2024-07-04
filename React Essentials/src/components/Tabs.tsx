import TabButton from './TabButton';

const Tabs = ({
  current,
  labels,
  handleSelect,
  Container = 'menu',
}: {
  current: string;
  labels: {
    code: string;
    text: string;
  }[];
  handleSelect: (title: string) => void;
  Container: string | ((props: any) => JSX.Element);
}) => (
  <Container>
    {labels.map((title, index) => (
      <TabButton
        isSelected={current === title.code}
        onClick={() => handleSelect(title.code)}
        key={`tab-${title.code}-${index}`}
      >
        {title.text}
      </TabButton>
    ))}
  </Container>
);

export default Tabs;
