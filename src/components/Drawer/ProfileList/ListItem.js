import { memo, useEffect, useRef, useState } from "react";
import "./ListItem.css";

const ListItem = memo(function ListItem({ label, type, isActive, editable }) {
  const inputRef = useRef(null);

  const [input, setInput] = useState(label);

  useEffect(() => {
    if (editable) {
      inputRef.current.focus();
    }
  }, [editable]);

  return (
    <li className={`profile-item ${type} ${isActive ? "active" : ""}`}>
      {label}
      {editable && (
        <input
          ref={inputRef}
          className="profile-item"
          type="text"
          value={input}
          onFocus={(event) => event.target.select()}
          onChange={(evt) => setInput(evt.target.value)}
        />
      )}
    </li>
  );
});

export { ListItem };
