import { ListItem } from "./ListItem";
import "./ProfileList.css";

export function ProfileList() {
  const items = [
    {
      id: 1,
      label: "Movie",
      type: "movie",
    },
    {
      id: 2,
      label: "Game",
      type: "game",
    },
    {
      id: 3,
      label: "Default",
      type: "default",
    },
    {
      id: 4,
      label: "Music",
      type: "music",
    },
    {
      id: 5,
      label: "Really Really Long Long Name",
      type: "custom",
      isActive: true,
      editable: true,
    },
    {
      id: 6,
      label: "Really Really Long Long Name",
      type: "custom",
    },
    {
      id: 7,
      label: "Really Really Long Long Name",
      type: "custom",
    },
    {
      id: 8,
      label: "Really Really Long Long Name",
      type: "custom",
    },
  ];
  return (
    <ul className="profile-list scrollable">
      {items.map(({ id, label, type, isActive, editable }) => (
        <ListItem
          key={`${id}`}
          label={label}
          type={type}
          isActive={isActive}
          editable={editable}
        />
      ))}
    </ul>
  );
}
