const Section = ({
  id,
  title,
  children,
  ...props
}: {
  id: string;
  title: string;
  children: JSX.Element | JSX.Element[];
}) => (
  <section id={id} {...props}>
    <h2>{title}</h2>
    {children}
  </section>
);

export default Section;
