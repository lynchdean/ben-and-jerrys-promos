import "./App.css";
import NavContent from "./Sections/NavContent";
import NavPills from "./Sections/NavPills";

function App() {
  return (
    <div className="App container">
      <header className="App-header p-2 mt-3">
        <h2 className="p-3">BEN & JERRY'S DEALS</h2>
        <NavPills />
      </header>
      <div className="body text-center mx-3 px-2 pt-3 pb-1">
        <NavContent />
      </div>

      <nav className="bottom-nav navbar mx-3 p-5" />
    </div>
  );
}

export default App;
