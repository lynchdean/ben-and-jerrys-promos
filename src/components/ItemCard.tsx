import * as React from "react";

interface Props {
  title: string;
  link: string;
  saving: string;
  lifetime: string;
}

function Item({ title, link, saving, lifetime}: Props) {
  return (
    <a href={link} className="text-decoration-none">
      <div className="card text-white bg-success">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title display-4">{title}</h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-body text-end">
              <h4>{saving}</h4>
              <h4>{lifetime}</h4>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Item;
