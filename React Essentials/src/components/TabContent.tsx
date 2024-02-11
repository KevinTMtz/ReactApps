const TabContent = ({
  example,
}: {
  [key: string]: {
    title: string;
    description: string;
    code: string;
  };
}) => (
  <div id='tab-content'>
    <h3>{example.title}</h3>
    <p>{example.description}</p>
    <pre>
      <code>{example.code}</code>
    </pre>
  </div>
);

export default TabContent;
