import "./NormalButton.css";

export function NormalButton({
  iconType,
  hide = false,
  disable = false,
  handleClick,
}) {
  return (
    !hide && (
      <button
        className={`icon ${iconType}`}
        disabled={disable}
        onClick={handleClick}
      ></button>
    )
  );
}
