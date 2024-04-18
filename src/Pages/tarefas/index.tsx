import { Link } from "react-router-dom"
import SimpleList from "../../components/simple-list"
import styles from './tarefas.module.css'

function Tarefas(){
    return (
        
        <div className={styles.container}>
            <h1>Tarefas</h1>
            <Link to='/'>Home   </Link>           
            <Link to='/Contato'>Contato  </Link>
            <Link to='/Sobre'>   Sobre   </Link>   
            <div>  
            <SimpleList
            title='Ts-React project tasks'
            item1='Develop the NodeJs API'
            item2='Create the react components'
            item3='Organize the web pages'
            />
        </div>
        </div>
    )
}

export default Tarefas