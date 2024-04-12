import { useDispatch, useSelector } from "react-redux";
import "./PopupWrapper.css";
import { del } from "../../redux/profiles";
import { setShowPopup } from "../../redux/appState";

export function PopupWrapper({ children }) {
  const { showPopup } = useSelector((state) => state.appState);
  const { profiles, selectedId } = useSelector((state) => state.profiles);
  const dispatch = useDispatch();

  const index = profiles.findIndex(({ id }) => id === selectedId);
  const { label } = profiles[index] || {};

  return !!children ? (
    <div
      tabIndex={0}
      id="del-wrapper"
      onBlur={(e) => {
        if (!e.relatedTarget) {
          dispatch(setShowPopup(false));
        }
      }}
    >
      {children}
      {showPopup && (
        <div className="profile-del">
          <h5>delete eq</h5>
          <p>{label}</p>
          <button
            onClick={() => {
              dispatch(del(index));
              dispatch(setShowPopup(false));
            }}
          >
            delete
          </button>
        </div>
      )}
    </div>
  ) : null;
}
