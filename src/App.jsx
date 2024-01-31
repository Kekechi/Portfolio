import { Outlet, redirect, useLoaderData } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import LangContext from "./Context/LangContext";
import metadata from "./metadata";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import LoadAnimation from "./Components/LoadAnimation/LoadAnimation";
import { Helmet } from "react-helmet";

const loader = ({ params }) => {
  const lang = params.lang;
  if (!lang) {
    return redirect("/en");
  }
  return lang;
};

function App() {
  const lang = useLoaderData();

  return (
    <LangContext.Provider value={lang}>
      <Helmet>
        <html lang={lang} />
        <title>{metadata[lang].title}</title>
        <meta name="description" content={metadata[lang].description} />
      </Helmet>
      <LoadAnimation>
        <Nav />
        <Outlet />
        <Footer />
      </LoadAnimation>

      <ScrollToTop />
    </LangContext.Provider>
  );
}

export default App;
export { loader };
