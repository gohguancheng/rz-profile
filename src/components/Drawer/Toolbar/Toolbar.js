import { NormalButton } from "../../IconButtons/NormalButton";
import { PopupWrapper } from "../../PopupWrapper/PopupWrapper";
import "./Toolbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  add,
  moveDown,
  moveUp,
  setEditSelected,
} from "../../../redux/profiles";
import { setShowPopup } from "../../../redux/appState";

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
          handleClick={() => {
            dispatch(setShowPopup(false));
            dispatch(moveUp(selectedId));
          }}
          disable={index === 0}
        />
        <NormalButton
          iconType="down"
          handleClick={() => {
            dispatch(setShowPopup(false));
            dispatch(moveDown(selectedId));
          }}
          disable={index === profiles.length - 1}
        />
      </div>
      <div className="flex-stretch">
        <PopupWrapper>
          <NormalButton
            iconType="del"
            handleClick={() => dispatch(setShowPopup(true))}
            hide={hideActions}
            untab={true}
          />
        </PopupWrapper>
        <NormalButton
          iconType="rename"
          handleClick={() => {
            dispatch(setShowPopup(false));
            dispatch(setEditSelected(true));
          }}
          hide={hideActions}
        />
        <NormalButton
          iconType="add"
          handleClick={() => {
            dispatch(setShowPopup(false));
            dispatch(add());
          }}
        />
      </div>
    </div>
  );
}
