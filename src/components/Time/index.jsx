import Colaborador from 'src/components/colaborador'
import './Time.css'
import PropTypes from 'prop-types'

const Time = (props) => {

    return(
        props.colaboradores.length > 0 && <section className='time' style={{backgroundColor: props.corSecundaria}} >
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador
                    corFundo={props.corPrimaria}
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    img={colaborador.img}
                    />)}
            </div>
        </section>
    )
}

Time.propTypes = {
    nome: PropTypes.string.isRequired,
    corPrimaria: PropTypes.string.isRequired,
    corSecundaria: PropTypes.string.isRequired,
    colaboradores: PropTypes.array
}

export default Time