import Link from "./Link";

type NavbarProps = {
  onLinkHomeClick: () => void;
  onLinkAboutClick: () => void;
};

export default function Navbar(props: NavbarProps) {
  const linkHome = Link({
    href: "/home",
    label: "Home",
    onClick: props.onLinkHomeClick,
  });
  const linkAbout = Link({
    href: "/about",
    label: "About",
    onClick: props.onLinkAboutClick,
  });

  const div = document.createElement("div");
  div.append(linkHome);
  div.append(linkAbout);

  return div;
}
