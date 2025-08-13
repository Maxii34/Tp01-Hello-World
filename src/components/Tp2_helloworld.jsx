import React from 'react';

const Tp2_Helloworld = ({saludo}) => {
    return (
        <div className='my-5 border-bottom'>
            <h1 className='fs-2'>Hello {saludo} </h1>
            <p className='text-muted'>Modificar el componente anterior y enviar mediante props el valor “My friend” de manera que el mensaje quede de la siguiente forma:</p>
        </div>
    );
};

export default Tp2_Helloworld;