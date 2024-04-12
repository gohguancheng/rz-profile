import { ListItem } from "./ListItem";
import "./ProfileList.css";

export function ProfileList() {
  const items = [
    {
      label: "Movie",
      type: "movie",
    },
    {
      label: "Game",
      type: "game",
    },
    {
      label: "Default",
      type: "default",
    },
    {
      label: "Music",
      type: "music",
    },
    {
      label: "Really Really Long Long Name",
      type: "custom",
      isActive: true,
    },
  ];
  return (
    <ul className="profile-list scrollable">
      {items.map(({ label, type, isActive }) => (
        <ListItem label={label} type={type} isActive={isActive} />
      ))}
    </ul>
  );
}
