import './Button.css' // classname='botao-fatec'
import styles from './Button.module.css' // style.botaoFatec

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function Button({type, label}: Props){
    return (
        <button className={styles.button} type={type}>
            {label}
        </button>
    )
}

export default Button