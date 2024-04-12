import "./Toolbar.css";

export function Toolbar() {
  return (
    <div className="toolbar flex-stretch">
      <div className="flex-stretch">
        <div>Up</div>
        <div>Down</div>
      </div>
      <div className="flex-stretch">
        <div>Del</div>
        <div>Rename</div>
        <div>Add</div>
      </div>
    </div>
  );
}
