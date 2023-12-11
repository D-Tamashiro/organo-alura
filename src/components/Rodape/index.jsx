import './Rodape.css'

const Rodape = () => {
    return(
        <div className='footer' style={{backgroundImage: 'url(/images/fundo.png)'}}>
            <div className='socialMedia'>
                <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                    <img src='/images/fb.png' alt='Facebook Logo' />
                </a>
                <a href='https://twitter.com/' target='_blank' rel='noreferrer'>
                    <img src='/images/tw.png' alt='Twitter Logo' />
                </a>
                <a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                    <img src='/images/ig.png' alt='Instagram Logo' />
                </a>
            </div>
            <section>
                <img src='/images/logo.png' alt='Logo Organun' />
            </section>
            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </div>
    )
}

export default Rodape