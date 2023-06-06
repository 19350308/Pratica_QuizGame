const PInicio = ({ setPagina }) => {

    return (
        <div>
            <h1
                style={{
                    textAlign: "center" 
                }}
            >THE QUIZ GAME <i class="bi bi-tencent-qq"></i>
            </h1>

            <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" class="btn btn-success btn-lg"
                onClick={() => setPagina('Capture')}>
                    <i class="bi bi-clipboard-plus-fill"> Agregar Preguntas </i>
                </button>

            <button type="button" class="btn btn-primary btn-lg"
                onClick={() => setPagina('Game')}>
                    <i class="bi bi-caret-right-square-fill"> Empezar a Jugar </i>
                </button>
            </div>
        </div>
    )
}

export default PInicio