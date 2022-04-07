import React from 'react';
import { ContainerInput, Label } from '../InputDoFormulario/style';
import { Select, Option } from './style';


const SelectDoFormulario = ({ text, name, options }) => {
    return(
        <ContainerInput>
            <Label htmlFor={name}>{text}</Label>
            <Select name={name} id={name}>
                <Option>Selecione uma Opção</Option>
                {console.log(options)}
                {options.map((opcao) => (
                    <Option key={opcao.id}>{opcao.name}</Option>
                ))};
            </Select>
        </ContainerInput>
    )
};

export default SelectDoFormulario;