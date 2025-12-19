type HeaderProps = {
  title?: string;
};

const Header = ({ title = "My Website" }: HeaderProps) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};

export default Header;
