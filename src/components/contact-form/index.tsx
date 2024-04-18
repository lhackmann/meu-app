import CustomInput from '../../components/Input/index'
import Button from '../../components/button/index'
import { Link } from "react-router-dom"
import styles from './ContactForm.module.css'

interface Props {
    title: string
}

function ContactForm({title}: Props) {
  return (
    <>
    <div>
            
          
    </div>
      <div className="container">
      <h1>Entre em contato</h1>
      <div className='separator'></div>
      <form>
        <div className="form-group">          
          <CustomInput type="input" placeholderText="nome" defaultValue={''} />
        </div>
        <div className="form-group">          
          <CustomInput type="email" placeholderText="e-mail" defaultValue={''} />
        </div>
        <div className="form-group">          
          <CustomInput type="tel" placeholderText="telefone" defaultValue={''} />
        </div>
        <div className='separator'></div>
        <Button type="submit" label="Enviar" />
      </form>
    </div>
    </>
  );
}

export default ContactForm;   