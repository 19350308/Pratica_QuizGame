import Swal from "sweetalert2"
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

const BAgregar = ({ listQuestions, setListQuestions }) => {

    const NewModal = async () => {
        const { value } = await Swal.fire({
            title: "Informacion de la pregunta",
            html: `
                <input 
                    type="text"
                    id="question" 
                    name="question" 
                    placeholder="Pregunta"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="answer1" 
                    name="answer1"
                    placeholder="Opcion 1"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="answer2" 
                    name="answer2"
                    placeholder="Opcion 2"
                    class="swal2-input"
                />
                <input 
                    type="text" 
                    id="answer3" 
                    name="answer3"
                    placeholder="Opcion 3"
                    class="swal2-input"
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
            cancelButtonText: "Dismiss",
            focusConfirm: false,
            preConfirm: () => {
                const question = Swal.getPopup().querySelector("#question").value;
                const answer1 = Swal.getPopup().querySelector("#answer1").value;
                const answer2 = Swal.getPopup().querySelector("#answer2").value;
                const answer3 = Swal.getPopup().querySelector("#answer3").value;
                const selected = Swal.getPopup().querySelector("#answerSelect").value;

                if (!question || !answer1 || !answer2 || !answer3 || !selected) {
                    Swal.showValidationMessage("Porfavor añade toda la informacion");
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
        const newList = [
            ...listQuestions,
            {
                id: uuidv4(),
                question: value.question,
                answer1: value.answer1,
                answer2: value.answer2,
                answer3: value.answer3,
                answerTrue: trueAnswer,
            }
        ]

        localStorage.setItem("listQuestions", JSON.stringify(newList));
        setListQuestions(newList);
    }

    return (
        <button
            type="button"
            class="btn btn-warning"
            onClick={NewModal}
        >
            <i class="bi bi-cloud-plus"></i>
        </button>
    )
}

export default BAgregar