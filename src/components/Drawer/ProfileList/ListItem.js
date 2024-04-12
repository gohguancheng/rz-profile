import { memo, useEffect, useRef, useState } from "react";
import "./ListItem.css";
import { useDispatch, useSelector } from "react-redux";
import { setTextInput } from "../../../redux/appState";
import {
  rename,
  setEditSelected,
  setSelectedId,
} from "../../../redux/profiles";

const ListItem = memo(function ListItem({
  label,
  type,
  isActive,
  editable,
  index,
  identifier,
}) {
  const inputRef = useRef(null);

  const { textInput } = useSelector((state) => state.appState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (editable) {
      dispatch(setTextInput(label));
      inputRef.current.focus();
    }
  }, [editable]);

  return (
    <li
      className={`profile-item ${type} ${isActive ? "active" : ""}`}
      onClick={() => (!editable ? dispatch(setSelectedId(identifier)) : null)}
    >
      {label}
      {editable && (
        <input
          ref={inputRef}
          className="profile-item"
          type="text"
          value={textInput ?? label}
          onFocus={(event) => event.target.select()}
          onChange={(evt) => {
            dispatch(setTextInput(evt.target.value));
          }}
          onBlur={() => {
            dispatch(rename({ newLabel: textInput || label, index }));
            dispatch(setEditSelected(false));
            dispatch(setTextInput(undefined));
          }}
          placeholder="Enter Profile Name"
        />
      )}
    </li>
  );
});

export { ListItem };
