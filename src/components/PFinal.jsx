import './juego.css'

const PFinal = ({ setPagina, listQuestions, puntuacion, setPuntuacion }) => {

    return (
        <div className='game-container my-component'>

            <main className="app">
                <div className='juego-terminado'>
                    <span>
                        {" "}
                        Puntaje {puntuacion}  de {listQuestions.length} Pregunta(s) {" "}
                    </span>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPagina('Game'); setPuntuacion(0); }}
                    >
                        Jugar de nuevo
                    </button>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPagina('Answers'); setPuntuacion(0); }}
                    >
                        Ver respuestas
                    </button>

                    <button
                        type="button"
                        style={{ marginTop: '20px' }}
                        onClick={() => { setPagina('Home'); setPuntuacion(0); }}
                    >
                        Inicio
                    </button>

                </div>
            </main>

        </div>
    )
}

export default PFinal