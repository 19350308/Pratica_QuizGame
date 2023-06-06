import Swal from "sweetalert2"

const BLimpiar = ({setListQuestions}) => {

    const clearList = async () => {
        const { isConfirmed } = await Swal.fire({
            title: '¿Seguro?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        })
        if (isConfirmed) {
            localStorage.setItem("listQuestions", JSON.stringify([]));
            setListQuestions([])
        }
    }

    return (
        <button
            className="btn btn-outline-danger me-1" class="btn btn-danger"
            onClick={clearList}
            type="button"
        >
            <i class="bi bi-trash-fill"></i>
        </button>
    )
}

export default BLimpiar