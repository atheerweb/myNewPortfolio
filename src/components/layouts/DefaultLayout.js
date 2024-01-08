import { Footer, NavBar } from "../index";

function DefaultLayout({ content }) {
  return (
    <div>
      <div className="App font-body m-auto max-w-7xl">
        <NavBar />
        <div className="p-4 sm:px-0 sm:py-10 min-h-96">{content}</div>
      </div>
      <div className="max-w-screen-2xl">
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
