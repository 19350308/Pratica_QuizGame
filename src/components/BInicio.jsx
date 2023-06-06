const BInicio = ({setPagina}) => {
    return (
            <button
                type="button"
                class="btn btn-light"
                onClick={() => setPagina('Home')}
            ><i class="bi bi-houses"></i>

            </button>
    )
}

export default BInicio