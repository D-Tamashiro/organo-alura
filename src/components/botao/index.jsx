import './botao.css'
import PropTypes from 'prop-types'

const Botao = (props) => {
    return(
        <button className='botao'>
            {props.texto}
        </button>
    )
}

Botao.propTypes = {
    texto: PropTypes.string.isRequired
}

export default Botao