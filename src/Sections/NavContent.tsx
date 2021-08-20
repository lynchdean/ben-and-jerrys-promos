import * as React from "react";
import "./css/PillNav.css";
import ItemCard from "../components/ItemCard";

import data from "../data/data.json";

function NavContent(): JSX.Element {
  let tabContent: JSX.Element[] = [];

  for (var i = 0; i < data.stores.length; i++) {
    let tabContentItems: JSX.Element[] = [];

    const name = data.stores[i].name;
    const lowerName = name.toLowerCase();
    const active = i === 0 ? true : false;

    for (let item of data.stores[i].items) {
      tabContentItems.push(
        <ItemCard
          title={item.name}
          link={item.link}
          saving={item.saving}
          lifetime={item.lifetime}
          key={item.name + i}
        />
      );
    }

    tabContent.push(
      <div
        className={"tab-pane fade" + (active ? " show active" : "")}
        id={"pills-" + lowerName}
        role="tabpanel"
        aria-labelledby={"pills-" + lowerName + "-tab"}
        key={"tab" + i}
      >
        {tabContentItems}
      </div>
    );
  }
  return (
    <div>
      <div className="container">
        <div className="tab-content" id="pills-tabContent">
          {tabContent}
        </div>
      </div>
    </div>
  );
}

export default NavContent;
