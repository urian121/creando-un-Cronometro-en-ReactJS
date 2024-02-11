import { useState, useEffect } from "react";

function Cronometro() {
  const [segundos, setSegundos] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSegundos((prevSegundos) => prevSegundos + 1);
      }, 100); // Cambiado a 100ms para que avance rápido
    } else {
      clearInterval(intervalId);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const iniciarDetenerCronometro = () => {
    setIsRunning(!isRunning);
  };

  const reiniciarCronometro = () => {
    setSegundos(0);
    setIsRunning(false);
  };

  // Formatear los segundos en HH:MM:SS
  const formatearTiempo = () => {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    const formatoHoras = horas.toString().padStart(2, "0");
    const formatoMinutos = minutos.toString().padStart(2, "0");
    const formatoSegundos = segundosRestantes.toString().padStart(2, "0");

    return `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
  };

  return (
    <div>
      <p>Tiempo transcurrido:</p>
      <p>
        <strong
          style={{
            fontSize: "80px",
            fontFamily: "Courier, sans-serif",
            color: "#fff",
          }}>
          {formatearTiempo()}
        </strong>
      </p>
      <button onClick={iniciarDetenerCronometro}>
        {isRunning ? "Detener" : "Iniciar"}
      </button>
      <button onClick={reiniciarCronometro}>Reiniciar</button>
    </div>
  );
}

export default Cronometro;
