import ButtonFatec from "../button-fatec"
import InputFatec from "../Input-fatec"

function Form(){
    return (
        <>
            <InputFatec type="text" defaultValue="" placeHolder="Nome" />
            <br />
            <InputFatec type="text" defaultValue="" placeHolder="E-mail" />
            <br />
            <InputFatec type="text" defaultValue="" placeHolder="Telefone" />
            <br />
            <ButtonFatec type="button" label="Enviar" />
        </>
    )
}

export default Form