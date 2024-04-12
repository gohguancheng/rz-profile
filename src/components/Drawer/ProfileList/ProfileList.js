import { useSelector } from "react-redux";
import { ListItem } from "./ListItem";
import "./ProfileList.css";

export function ProfileList() {
  const { profiles, selectedId, editSelected } = useSelector(
    (state) => state.profiles
  );

  return (
    <ul className="profile-list scrollable">
      {profiles.map(({ id, label, type }, i) => (
        <ListItem
          key={`${id}`}
          label={label}
          type={type}
          isActive={selectedId === id}
          editable={editSelected && selectedId === id}
          index={i}
          identifier={id}
        />
      ))}
    </ul>
  );
}
