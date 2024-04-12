import { NormalButton } from "../../IconButtons/NormalButton";
import "./Toolbar.css";

export function Toolbar() {
  return (
    <div className="toolbar flex-stretch">
      <div className="flex-stretch">
        <NormalButton iconType="up" handleClick={() => console.log("up")} />
        <NormalButton iconType="down" handleClick={() => console.log("down")} disable />
      </div>
      <div className="flex-stretch">
        <NormalButton
          iconType="del"
          handleClick={() => console.log("del")}
          hide
        />
        <NormalButton iconType="rename" handleClick={() => console.log("rename")} hide />
        <NormalButton iconType="add" handleClick={() => console.log("add")} />
      </div>
    </div>
  );
}
