import './ListaSuspensa.css'
import PropTypes from 'prop-types'

const List = (props) => {
    return(
        <div className='lista-suspensa'>
            <label htmlFor="">{props.label}</label>
            <select
                required={props.required}
                value={props.valor}
                onChange={evento => props.setValor(evento.target.value)}
            >
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option> )}
            </select>
        </div>
    )
}

List.propTypes = {
    valor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    setValor: PropTypes.func.isRequired,
    itens: PropTypes.array.isRequired,
    required: PropTypes.bool,
}

export default List