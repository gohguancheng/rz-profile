import { useDispatch, useSelector } from "react-redux";
import { NormalButton } from "../../IconButtons/NormalButton";
import "./Toolbar.css";
import {
  add,
  moveDown,
  moveUp,
  setEditSelected,
} from "../../../redux/profiles";

export function Toolbar() {
  const { selectedId, profiles } = useSelector((state) => state.profiles);
  const dispatch = useDispatch();

  const hideActions = selectedId < 5;
  const index = profiles.findIndex(({ id }) => selectedId === id);
  return (
    <div className="toolbar flex-stretch">
      <div className="flex-stretch">
        <NormalButton
          iconType="up"
          handleClick={() => dispatch(moveUp(selectedId))}
          disable={index === 0}
        />
        <NormalButton
          iconType="down"
          handleClick={() => dispatch(moveDown(selectedId))}
          disable={index === profiles.length - 1}
        />
      </div>
      <div className="flex-stretch">
        <NormalButton
          iconType="del"
          handleClick={() => console.log("del")}
          hide={hideActions}
        />
        <NormalButton
          iconType="rename"
          handleClick={() => dispatch(setEditSelected(true))}
          hide={hideActions}
        />
        <NormalButton iconType="add" handleClick={() => dispatch(add())} />
      </div>
    </div>
  );
}
