const CoreConcept = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => (
  <li>
    <h3>{title}</h3>
    <p>{description}</p>
    <img src={image} />
  </li>
);

export default CoreConcept;
