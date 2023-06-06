import BAgregar from "./BAgregar";
import BInicio from "./BInicio";
import BLimpiar from "./BLimpiar";
import Preguntas from "./Preguntas";


const PCaptura = ({
    setPagina,
    listQuestions,
    setListQuestions,
}) => {

    return (
        <div className="container">

            <div className="row">
                <div className="col text-start">
                    <h1>Añadir preguntas</h1>
                </div>
                <div className="col text-end mt-1">
                    <BLimpiar
                        setListQuestions={setListQuestions}
                    />
                    <BAgregar
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                    <BInicio
                        setPagina={setPagina}
                    />
                </div>
            </div>

            <hr />
            {
                listQuestions.length === 0 && (
                    <div className="text-center">
                        <h3>Añade Preguntas</h3>
                    </div>
                )
            }
            {
                listQuestions.map((pregunta) => (
                    <Preguntas
                        pregunta={pregunta}
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                ))
            }


            <hr />

            <div className="col text-end">
                <BLimpiar
                    setListQuestions={setListQuestions}
                />
                <BAgregar
                    listQuestions={listQuestions}
                    setListQuestions={setListQuestions}
                />
                <BInicio
                    setPagina={setPagina}
                />
            </div>

        </div>
    )
}

export default PCaptura