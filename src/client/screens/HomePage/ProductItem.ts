type ProductItemProps = { title: string };

export default function ProductItem(props: ProductItemProps) {
  const titleText = document.createElement("p");
  titleText.textContent = props.title;
  return titleText;
}
