import { useState } from "react";
import { Button } from "react-bootstrap";

const Tp3_helloworld = ({ saludo }) => {
  const [msj] = useState("(from changed state)");
  const [ocultar, setOcultar] = useState(false);

  return (
    <div className="my-5 card p-2 shadow w-auto">
      <h1 className="fs-2">
        Hello {saludo} {ocultar && <span>{msj}</span>}{" "}
      </h1>
      <p className="text-muted">03- Modificar el programa anterior agregando al componente un state con la clave msj: “(from changed state)”, además agregar un botón al presionar este botón (onClick), el state de la clave msj se debe mostrar por pantalla.</p>
      <div>
        <Button className="shadow" variant="dark" onClick={() => setOcultar(!ocultar)}>
          Click me
        </Button>
      </div>
    </div>
  );
};

export default Tp3_helloworld;
