const TabButton = ({
  children,
  onClick,
  isSelected,
}: {
  children: string;
  onClick: () => void;
  isSelected: boolean;
}) => (
  <li>
    <button className={isSelected ? 'active' : ''} onClick={onClick}>
      {children}
    </button>
  </li>
);

export default TabButton;
