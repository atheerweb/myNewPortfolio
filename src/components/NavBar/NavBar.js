import "./NavBar.scss";
const NavBar = () => {
  return (
    <div className="nav__wrapper">
      <h1 id="logo">YOUSOUF</h1>
      <div id="nav__button">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default NavBar;
