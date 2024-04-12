import "./App.css";
import { AppContainer } from "./components/AppContainer/AppContainer";
import { Drawer } from "./components/Drawer/Drawer";
import { Window } from "./components/Window/Window";

function App() {
  return (
    <div className="main-container">
      <AppContainer>
        <Drawer />
        <Window />
      </AppContainer>
    </div>
  );
}

export default App;
