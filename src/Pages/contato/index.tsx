import { Link } from "react-router-dom";
import ContactForm from "../../components/contact-form";
import styles from './Contato.module.css'


function Contato() {
    return (
        <div>
            <div className={styles.container}>
                <h1>Contato</h1>
                <Link to='/'>Home </Link>{' '}
                <Link to='/sobre'>Sobre </Link>{' '}
                <Link to='/Tarefas'> Tarefas </Link>
                <p></p>
            </div>
            <ContactForm title='Entre em contato' />
        </div>
    );
}

export default Contato