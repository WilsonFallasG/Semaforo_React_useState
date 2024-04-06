import React, { useState } from 'react';
import '../index.css';

const Semaforo = () => {
  const [estado, setEstado] = useState({
    rojo: false,
    amarillo: false,
    verde: false
  });
  const [reflejoActivo, setReflejoActivo] = useState(null);

  const cambiarEstado = (color) => {
    setEstado({
      rojo: color === 'rojo' ? !estado.rojo : false,
      amarillo: color === 'amarillo' ? !estado.amarillo : false,
      verde: color === 'verde' ? !estado.verde : false
    });
    setReflejoActivo(color);
  };

  return (
    <div className="semaforo">
      <div
        className={`luz luz-roja ${estado.rojo ? 'luz-encendida' : 'luz-apagada'} ${
          reflejoActivo === 'rojo' ? 'reflejo-activo' : ''
        }`}
        onClick={() => cambiarEstado('rojo')}
      />
      <div
        className={`luz luz-amarilla ${estado.amarillo ? 'luz-encendida' : 'luz-apagada'} ${
          reflejoActivo === 'amarillo' ? 'reflejo-activo' : ''
        }`}
        onClick={() => cambiarEstado('amarillo')}
      />
      <div
        className={`luz luz-verde ${estado.verde ? 'luz-encendida' : 'luz-apagada'} ${
          reflejoActivo === 'verde' ? 'reflejo-activo' : ''
        }`}
        onClick={() => cambiarEstado('verde')}
      />
    </div>
  );
};

export default Semaforo;