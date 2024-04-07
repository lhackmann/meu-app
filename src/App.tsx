import CustomInput from './components/Input';
import ButtonFatec from './components/button-fatec';
import './App.css'; 

function App() {
  return (
    <>
      <div className="container">
      <h1>Entre em contato</h1>
      <div className='separator'></div>
      <form>
        <div className="form-group">          
          <CustomInput type="input" placeholder="nome" initialValue={''} />
        </div>
        <div className="form-group">          
          <CustomInput type="email" placeholder="e-mail" initialValue={''} />
        </div>
        <div className="form-group">          
          <CustomInput type="tel" placeholder="telefone" initialValue={''} />
        </div>
        <div className='separator'></div>
        <ButtonFatec type="submit" label="Enviar" />
      </form>
    </div>
    </>
  );
}

export default App;   