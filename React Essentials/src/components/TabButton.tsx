const TabButton = ({
  children,
  onClick,
  isSelected,
  ...props
}: {
  children: string;
  onClick: () => void;
  isSelected: boolean;
}) => (
  <li>
    <button className={isSelected ? 'active' : ''} onClick={onClick} {...props}>
      {children}
    </button>
  </li>
);

export default TabButton;
