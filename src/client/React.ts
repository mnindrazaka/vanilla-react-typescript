export const ReactDOM = (function () {
  let _container: HTMLElement;
  let _Component: () => HTMLElement;

  return {
    update() {
      this.render(_container, _Component);
    },
    render(container: HTMLElement, Component: () => HTMLElement) {
      _container = container;
      _Component = Component;

      const focusedElementId = document.activeElement.id;
      const focusedElementSelectionStart =
        // @ts-ignore
        document.activeElement.selectionStart;
      // @ts-ignore
      const focusedElementSelectionEnd = document.activeElement.selectionEnd;

      const componentDOM = React.render(Component);
      container.replaceChildren();
      container.appendChild(componentDOM);

      if (focusedElementId) {
        const focusedElement = document.getElementById(focusedElementId);
        focusedElement.focus();
        // @ts-ignore
        focusedElement.selectionStart = focusedElementSelectionStart;
        // @ts-ignore
        focusedElement.selectionEnd = focusedElementSelectionEnd;
      }
    },
  };
})();

export const React = (function () {
  let hooks = [];
  let currentIndex = 0;

  return {
    render(Component: () => HTMLElement) {
      currentIndex = 0;

      const Comp = Component();
      return Comp;
    },
    useState<T>(initialValue: T): [T, (newVal: T) => void] {
      const useStateIndex = currentIndex;
      currentIndex++;

      hooks[useStateIndex] = hooks[useStateIndex] ?? initialValue;

      const setState = (newVal: T) => {
        const newState =
          typeof newVal === "function" ? newVal(hooks[useStateIndex]) : newVal;
        hooks[useStateIndex] = newState;
        ReactDOM.update();
      };

      return [hooks[useStateIndex], setState];
    },
    useReducer<State, Action>(
      reducer: (prevState: State, action: Action) => State,
      initialState: State
    ): [State, (action: Action) => void] {
      const useReducerIndex = currentIndex;
      currentIndex++;

      hooks[useReducerIndex] = hooks[useReducerIndex] ?? initialState;

      const dispatch = (action: Action) => {
        const newState = reducer(hooks[useReducerIndex], action);
        hooks[useReducerIndex] = newState;
        ReactDOM.update();
      };

      return [hooks[useReducerIndex], dispatch];
    },
    useEffect(callback: () => void, depArray: any[]) {
      const hasNoDeps = !depArray;
      const deps = hooks[currentIndex];
      const hasChangedDeps = deps
        ? !depArray.every((el, i) => el === deps[i])
        : true;
      if (hasNoDeps || hasChangedDeps) {
        hooks[currentIndex] = depArray;
        callback();
      }
      currentIndex++;
    },
  };
})();
