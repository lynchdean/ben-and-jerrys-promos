import { isTemplateTail } from "typescript";
import "./App.css";
import data from "./data/data.json";

function App() {
  let tabs: JSX.Element[] = [];
  let tabContent: JSX.Element[] = [];

  for (var i = 0; i < data.stores.length; i++) {
    const name = data.stores[i].name;
    const lowerName = name.toLowerCase();
    const active = i === 0 ? true : false;

    tabs.push(
      <li className="nav-item" role="presentation" key={i}>
        <button
          className={"nav-link" + (active ? " active" : "")}
          id={"pills-" + lowerName + "-tab"}
          data-bs-toggle="pill"
          data-bs-target={"#pills-" + lowerName}
          type="button"
          role="tab"
          aria-controls={"pills-" + lowerName}
          aria-selected={active}
        >
          {name} ({data.stores[i].items.length})
        </button>
      </li>
    );

    tabContent.push(
      <div
        className={"tab-pane fade" + (active ? " show active" : "")}
        id={"pills-" + lowerName}
        role="tabpanel"
        aria-labelledby={"pills-" + lowerName +"-tab"}
        key={i}
      >
        {i}
      </div>
    );
  }

  return (
    <div className="container text-center">
      <h1 className="display-2">Ben and Jerry's Promos</h1>
      <ul className="nav nav-pills nav-fill" id="pills-tab" role="tablist">
        {tabs}
      </ul>
      <div className="tab-content" id="pills-tabContent">
        {tabContent}
      </div>
    </div>
  );
}

export default App;
