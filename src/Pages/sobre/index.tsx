import { Link } from "react-router-dom"
import styles from './Sobre.module.css'

function Sobre(){
    return (
        <div className={styles.container}>
            <h1>Sobre</h1>
            <Link to='/'>Home   </Link>           
            <Link to='/Contato'>Contato  </Link>
            <Link to='/Tarefas'>   Tarefas   </Link>   
            <div>     
              
            <p>Projeto realizado por Lucas Hackmann, brasileiro de 26 anos estudante de programação.</p>
            
            </div>  
        </div>
    )
}

export default Sobre