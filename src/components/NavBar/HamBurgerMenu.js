export default function HamBurgerMenu({ toggleSideMenu }) {
  return (
    <div
      className="sm:hidden flex flex-col justify-end items-end gap-1"
      onClick={toggleSideMenu}
    >
      <div className="bg-primaryColor w-7 h-1 rounded"></div>
      <div className="bg-primaryColor w-9 h-1 rounded"></div>
      <div className="bg-primaryColor w-11 h-1 rounded"></div>
    </div>
  );
}
