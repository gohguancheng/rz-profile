import { memo } from "react";
import "./ListItem.css";

const ListItem = memo(function ListItem({ label, type, isActive }) {
  return (
    <li className={`profile-item ${type} ${isActive ? "active" : ""}`}>
      {label}
    </li>
  );
});

export { ListItem };
