import React from 'react';

const Tp2_Helloworld = ({saludo}) => {
    return (
        <div className="my-5 card p-2 shadow">
            <h1 className='fs-2'>Hello World {saludo} </h1>
            <p className='text-muted'>02- Modificar el componente anterior y enviar mediante props el valor “My friend” de manera que el mensaje quede de la siguiente forma:</p>
        </div>
    );
};

export default Tp2_Helloworld;