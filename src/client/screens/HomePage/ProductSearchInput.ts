type ProductSearchInputProps = {
  inputValue: string;
  onInputChange: (value: string) => void;
  onButtonClearClick: () => void;
  onButtonSubmitClick: () => void;
  tag: string;
};

export default function ProductSearchInput(props: ProductSearchInputProps) {
  const input = document.createElement("input");
  input.id = "input";
  input.value = props.inputValue;
  input.placeholder = "enter your name";
  input.disabled = props.tag === "loading";
  input.oninput = function (event) {
    // @ts-ignore
    props.onInputChange(event.target.value);
  };

  const buttonClear = document.createElement("button");
  buttonClear.textContent = "Clear";
  buttonClear.disabled = props.tag === "loading";
  buttonClear.onclick = function () {
    props.onButtonClearClick();
  };

  const buttonSubmit = document.createElement("button");
  buttonSubmit.textContent = "Submit";
  buttonSubmit.disabled = props.tag === "loading";
  buttonSubmit.onclick = function () {
    props.onButtonSubmitClick();
  };

  const div = document.createElement("div");
  div.append(input);
  div.append(buttonClear);
  div.append(buttonSubmit);

  return div;
}
