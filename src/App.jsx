import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import LangContext from "./Context/LangContext";
import metadata from "./metadata";

const loader = ({ params }) => {
  const lang = params?.lang ?? "en";

  document.documentElement.lang = lang;
  document.title = metadata[lang].title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", metadata[lang].description);
  }

  return lang;
};

function App() {
  const lang = useLoaderData();

  return (
    <LangContext.Provider value={lang}>
      <Nav />
      <Outlet />
      <Footer />
    </LangContext.Provider>
  );
}

export default App;
export { loader };
