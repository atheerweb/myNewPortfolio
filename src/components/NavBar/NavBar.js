import "./NavBar.scss";
const NavBar = () => {
  return (
    <nav>
      <h1 className="logo">YOUSOUF</h1>
      <div id="nav__button">
        <div className="button__bar"></div>
        <div className="button__bar"></div>
        <div className="button__bar"></div>
      </div>
    </nav>
  );
};

export default NavBar;
