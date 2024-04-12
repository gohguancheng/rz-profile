import "./Drawer.css";
import { ProfileList } from "./ProfileList/ProfileList";
import { Toolbar } from "./Toolbar/Toolbar";

export function Drawer() {
  return (
    <div className="thx-drawer">
      <h1 className="main-title">profile list</h1>
      <div className="drawer-select">
        <ProfileList />
        <Toolbar />
      </div>
    </div>
  );
}
