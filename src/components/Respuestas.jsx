import './juego.css'
import { useEffect, useState } from 'react';

const Respuestas = ({ setPagina, listQuestions }) => {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [final, setFinal] = useState(false);

    const handleVerity = () => {
        if (preguntaActual === listQuestions.length - 1) {
            setFinal(true);
            setPagina('Game');
        } else {
            setPreguntaActual(preguntaActual + 1);
        }
    }

    return (
        <div className='game-container my-component'>

            <main className="app">
                <div className="lado-izquierdo">
                    <div className="numero-pregunta">
                        <span>Pregunta {preguntaActual + 1} de</span> {listQuestions.length}
                    </div>
                    <div className="titulo-pregunta">
                        {listQuestions[preguntaActual].question}
                    </div>
                    <div>
                        {listQuestions[preguntaActual].answerTrue}
                    </div>
                    <button type="button" onClick={() => handleVerity()}>
                        Continuar
                    </button>
                </div>
            </main>

        </div>
    )
}

export default Respuestas