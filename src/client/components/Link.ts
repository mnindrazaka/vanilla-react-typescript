type LinkProps = {
  href: string;
  label: string;
  onClick: () => void;
};

export default function Link(props: LinkProps) {
  const a = document.createElement("a");
  a.href = props.href;
  a.textContent = props.label;
  a.onclick = function (event) {
    event.preventDefault();
    props.onClick();
  };
  return a;
}
