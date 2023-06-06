import './juego.css'
import { useEffect, useState } from 'react';

const PJuego = ({ pagina, setPagina, listQuestions, puntuacion, setPuntuacion }) => {
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [final, setFinal] = useState(false);
    const [timeR, setTimeR] = useState(30);
    const [disable, setDisable] = useState(false);

    const handleAnswerSubmit = (e) => {
        //Anadir puntuación
        if (e.target.value === listQuestions[preguntaActual].answerTrue) {
            setPuntuacion(puntuacion + 1);
            e.target.classList.add("correct");
        } else {
            e.target.classList.add("incorrect");
        }

        //cambiar a la siguiente pregunta
        setTimeout(() => {
            if (preguntaActual === listQuestions.length - 1) {
                setFinal(true);
                setPagina('Finish');
            } else {
                setPreguntaActual(preguntaActual + 1);
                setTimeR(31);
            }
            e.target.className = '';
        }, 1000);
    }

    const handleVerity =() => {
        if (preguntaActual === listQuestions.length - 1) {
            setFinal(true);
            setPagina('Finish');
        }
    }


    return (

        <div className='game-container my-component'>
            {
                pagina === 'Game' && (
                    <div>
                        <main className="app">
                            <div className="lado-izquierdo">
                                <div className="numero-pregunta">
                                    <span>Pregunta {preguntaActual + 1} de</span> {listQuestions.length}
                                </div>
                                <div className="titulo-pregunta">{listQuestions[preguntaActual].question}</div>
                            </div>

                            <div className="lado-derecho">

                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listQuestions[preguntaActual].answer1}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                >
                                    {listQuestions[preguntaActual].answer1}
                                </button>

                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listQuestions[preguntaActual].answer2}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                >
                                    {listQuestions[preguntaActual].answer2}
                                </button>

                                <button
                                    disabled={disable}
                                    type="button"
                                    value={listQuestions[preguntaActual].answer3}
                                    onClick={(e) => handleAnswerSubmit(e)}
                                >
                                    {listQuestions[preguntaActual].answer3}
                                </button>
                            </div>
                        </main>
                    </div>
                )
            }
        </div>
    )
}


export default PJuego