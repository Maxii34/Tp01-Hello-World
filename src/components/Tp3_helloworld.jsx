import React from "react";
import { useState } from "react";

const Tp3_helloworld = ({ saludo }) => {
  const [msj] = useState("(from changed state)");
  const [ocultar, setOcultar] = useState(false);

  return (
    <div className="my-5 border-bottom">
      <h1 className="fs-2">
        Hello {saludo} {ocultar && <span>{msj}</span>}{" "}
      </h1>
      <p className="text-muted"></p>
      <div>
        <button className="btn btn-dark shadow" onClick={() => setOcultar(!ocultar)}>
          Click me
        </button>
      </div>
    </div>
  );
};

export default Tp3_helloworld;
