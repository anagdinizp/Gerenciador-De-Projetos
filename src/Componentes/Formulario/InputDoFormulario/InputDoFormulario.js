import React from 'react';
import { ContainerInput, Label, Input } from './style';


const InputDoFormulario = ({type, text, name, placeholder, alterarNome, value}) => {
    return(
        <ContainerInput>
            <Label htmlFor={name}>{text}</Label>
            <Input type={type} name={name} id={name} placeholder={placeholder} onChange={alterarNome} value={value}></Input>
        </ContainerInput>
    )
};

export default InputDoFormulario;