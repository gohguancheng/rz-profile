import "./NormalButton.css";

export function NormalButton({
  iconType,
  hide = false,
  disable = false,
  untab = false,
  handleClick,
}) {
  return (
    !hide && (
      <button
        tabIndex={untab ? -1 : 0}
        className={`icon ${iconType}`}
        disabled={disable}
        onClick={handleClick}
      ></button>
    )
  );
}
