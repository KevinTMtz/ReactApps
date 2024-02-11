import image from '../../assets/react-core-concepts.png';
import './Header.css';

const Header = () => {
  const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

  const genRandomInt = () => {
    return Math.floor(Math.random() * (reactDescriptions.length + 1));
  };

  return (
    <header>
      <img src={image} alt='Stylized atom' />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomInt()]} React concepts you will need for
        almost any app you are going to build!
      </p>
    </header>
  );
};

export default Header;
