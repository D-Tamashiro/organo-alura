import './Colaborador.css'
import PropTypes from 'prop-types'

const Colaborador = ({ nome, cargo, img, corFundo }) => {

    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corFundo}} >
                <img src={img} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome} </h4>
                <h5>{cargo} </h5>
            </div>
        </div>
    )
}

Colaborador.propTypes = {
    nome: PropTypes.string,
    cargo: PropTypes.string,
    img: PropTypes.string,
    corFundo: PropTypes.string
}

export default Colaborador