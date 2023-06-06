import Swal from "sweetalert2"

const Preguntas = ({
    pregunta,
    listQuestions,
    setListQuestions,
}) => {
    const { id, question, answer1, answer2, answer3, answerTrue } = pregunta;

    const deleteListQuestion = () => {
        const newList = listQuestions.filter(pregunta => pregunta.id !== id)
        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions(newList);
    }

    const editListQuestion = async () => {
        const { value } = await Swal.fire({
            title: "Informacion de la pregunta",
            html: `
                <input 
                    type="text"
                    id="question" 
                    name="question" 
                    placeholder="Pregunta"
                    class="swal2-input"
                    value="${question}"
                />
                <input 
                    type="text" 
                    id="answer1" 
                    name="answer1"
                    placeholder="Opcion 1"
                    class="swal2-input"
                    value="${answer1}"
                />
                <input 
                    type="text" 
                    id="answer2" 
                    name="answer2"
                    placeholder="Opcion 2"
                    class="swal2-input"
                    value="${answer2}"
                />
                <input 
                    type="text" 
                    id="answer3" 
                    name="answer3"
                    placeholder="Opcion 3"
                    class="swal2-input"
                    value="${answer3}"
                />
                <select id="answerSelect" class="swal2-input">
                    <option value="">Selecciona la respuesta correcta</option>
                    <option value="answer1">Opcion 1</option>
                    <option value="answer2">Opcion 2</option>
                    <option value="answer3">Opcion 3</option>
                </select>
            `,
            confirmButtonText: "Continue",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            focusConfirm: false,
            preConfirm: () => {
                const question = Swal.getPopup().querySelector("#question").value;
                const answer1 = Swal.getPopup().querySelector("#answer1").value;
                const answer2 = Swal.getPopup().querySelector("#answer2").value;
                const answer3 = Swal.getPopup().querySelector("#answer3").value;
                const selected = Swal.getPopup().querySelector("#answerSelect").value;

                if (!question || !answer1 || !answer2 || !answer3 || !selected) {
                    Swal.showValidationMessage("Coloca toda la informacion");
                }

                return { question, answer1, answer2, answer3, selected };
            },
        })

        
        if (!value.question || !value.answer1 || !value.answer2 || !value.answer3 || !value.selected) return;

        let trueAnswer;
        if (value.selected === 'answer1') {
            trueAnswer = value.answer1;
          }
        if (value.selected === 'answer2') {
            trueAnswer = value.answer2;
          }
          
        if (value.selected === 'answer3') {
            trueAnswer = value.answer3;
          }

        const newList= listQuestions.map((pregunta) => {
            if(pregunta.id === id){
                pregunta.question = value.question;
                pregunta.answer1 = value.answer1;
                pregunta.answer2 = value.answer2;
                pregunta.answer3 = value.answer3;
                pregunta.answerTrue = trueAnswer;
            }
            return pregunta;
        })

        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions(newList);
    }

    return (
        <div className="row text-center align-items-center mt-4">

            <div className="col">{question}</div>

            <div className="col-3 col-md-3">
                <strong>1.</strong> {answer1}<br />
                <strong>2.</strong> {answer2}<br />
                <strong>3.</strong> {answer3}
            </div>

            <div className="col-3 col-md-3">{answerTrue}</div>

            <div className="col-4 col-md-2 btn-group btn-group-sm" role="group">

                <button
                    type="button"
                    class="btn btn-outline-primary"
                    onClick={editListQuestion}
                >Editar
                </button>

                <button
                    type="button"
                    class="btn btn-outline-danger"
                    onClick={deleteListQuestion}
                >Eliminar
                </button>

            </div>

        </div >
    )
}

export default Preguntas