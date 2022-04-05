import React from 'react';
import { ContainerInput, Label } from '../InputDoFormulario/style';
import { Select, Option } from './style';


const SelectDoFormulario = ({ text, name, options, alterarNome, value}) => {
    return(
        <ContainerInput>
            <Label htmlFor={name}>{text}</Label>
            <Select name={name} id={name}>
                <Option>Selecione uma Opção</Option>
            </Select>
        </ContainerInput>
    )
};

export default SelectDoFormulario;