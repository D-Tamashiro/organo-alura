import './TextField.css'
import PropTypes from 'prop-types'

const TextField = (props) => {

    const concatenatedPlaceholder = `${props.placeholder}...`

    const aoDigitado = (evento) => {
        props.setValor(evento.target.value)
    }

    return(
        <>
            <div className='text-field'>
                <label htmlFor="">{props.label}</label>
                <input value={props.valor} onChange={aoDigitado} type='text' placeholder={concatenatedPlaceholder}/>
            </div>
        </>
    )
}

TextField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    valor: PropTypes.string.isRequired,
    setValor: PropTypes.func.isRequired
}

export default TextField