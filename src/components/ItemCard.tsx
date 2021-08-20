import * as React from "react";
import "./css/ItemCard.css";

interface Props {
  title: string;
  link: string;
  saving: string;
  lifetime: string;
}

function Item({ title, link, saving, lifetime }: Props) {
  return (
    <a href={link} className="text-decoration-none">
      <div className="card mb-3">
        <div className="row g-0">
          {/* <div className="col-md-8"> */}
          <div className="card-body">
            <div className="column">
              <div className="row">
                <h4 className="card-title">{title}</h4>
              </div>
              <div className="row">
                <small>{saving}</small>
              </div>
              <div className="row">
                <small>{lifetime}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Item;
