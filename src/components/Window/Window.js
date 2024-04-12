import { useSelector } from "react-redux";
import "./Window.css";

export function Window() {
  const { profiles, selectedId, editSelected } = useSelector(
    (state) => state.profiles
  );
  const { textInput } = useSelector((state) => state.appState);

  const { label } = profiles.find(({ id }) => id === selectedId) || {};
  const title = editSelected ? textInput : label;
  return (
    <div className="thx-window">
      <h1>{title}</h1>
    </div>
  );
}
