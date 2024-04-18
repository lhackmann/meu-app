import styles from './home.module.css'
import { Link, useNavigate } from 'react-router-dom'


function Home(){
    const navigate = useNavigate()

    return (
        
        <>
        <div className={styles.container}>
            <h1 onClick={() => {
                navigate('/')
            }}>Home</h1>
            
            <Link to='/sobre'>Sobre   </Link>           
            <Link to='/Contato'>Contato  </Link>
            <Link to='/Tarefas'>   Tarefas   </Link>
        </div>
        <body className={styles.body}>
        <p>Projeto realizado a pedido da John Deere para logística de transporte.</p>

    
        </body>
        </>
    )
}

export default Home

//adiciona ruma breve informação sobre o projeto