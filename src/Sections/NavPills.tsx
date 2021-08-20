import * as React from "react";
import "./css/PillNav.css";

import data from "../data/data.json";

function NavPills(): JSX.Element {
  let tabs: JSX.Element[] = [];
  for (var i = 0; i < data.stores.length; i++) {
    const name = data.stores[i].name;
    const lowerName = name.toLowerCase();
    const active = i === 0 ? true : false;

    tabs.push(
      <li className="nav-item" role="presentation" key={"nav" + i}>
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
          <strong>{name} ({data.stores[i].items.length})</strong>
        </button>
      </li>
    );
  }
  return (
    <ul
      className="nav nav-pills nav-fill m-2"
      id="pills-tab"
      role="tablist"
    >
      {tabs}
    </ul>
  );
}

export default NavPills;
