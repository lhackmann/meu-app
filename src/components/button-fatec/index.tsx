// import './ButtonFatec.css' // className='botao-fatec'
// import styles from './ButtonFatec.module.css' // styles.botaoFatec
import { Button } from '@chakra-ui/react'

interface Props {
    type: 'button' | 'submit' | 'reset'
    label: string
}

function ButtonFatec({type, label}: Props){
    return (
        <Button 
        type={type} 
        colorScheme='blue' 
        size='md' 
        variant='outline'>
            {label}
        </Button>
    )
}

export default ButtonFatec