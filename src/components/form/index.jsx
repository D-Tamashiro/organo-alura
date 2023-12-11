import { useState } from 'react'
import PropTypes from 'prop-types'
import Botao from 'src/components/botao'
import List from 'src/components/list'
import TextField from 'src/components/textField'
import './Form.css'

const Form = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [img, setImg] = useState('')
    const [time, setTime] = useState('')

    const inSave = (evento) => {
        evento.preventDefault()
        props.isRegistered({
            nome,
            cargo,
            img,
            time
        })
        setNome('')
        setCargo('')
        setImg('')
        setTime('')
    }

    return(
        <section className='form'>
            <form action='' onSubmit={inSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField
                    label='Nome'
                    placeholder='Digite seu nome'
                    valor={nome}
                    setValor={valor => setNome(valor)}
                />
                <TextField
                    label='Cargo'
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    setValor={valor => setCargo(valor)}
                />
                <TextField
                    label='Imagem'
                    placeholder='Digita o endereço da imagem'
                    valor={img}
                    setValor={valor => setImg(valor)}
                />
                <List
                    label='Times'
                    itens={props.times}
                    valor={time}
                    setValor={valor => setTime(valor)}
                />
                <Botao texto='Criar card'/>
            </form>
        </section>
    )
}

Form.propTypes = {
    isRegistered: PropTypes.func,
    times: PropTypes.array.isRequired
}

export default Form