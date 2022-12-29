import { React } from "./React";
import HomePage from "./screens/HomePage";
import AboutPage from "./screens/AboutPage";

export default function App() {
  const [pathname, setPathname] = React.useState(window.location.pathname);

  React.useEffect(() => {
    history.pushState(null, "", pathname);
  }, [pathname]);

  const onLinkHomeClick = () => {
    setPathname("/home");
  };

  const onLinkAboutClick = () => {
    setPathname("/about");
  };

  const homePage = HomePage({ onLinkHomeClick, onLinkAboutClick });
  const aboutPage = AboutPage({ onLinkHomeClick });

  if (pathname == "/home") {
    return homePage;
  } else if (pathname == "/about") {
    return aboutPage;
  } else {
    return homePage;
  }
}
