import React from 'react';
import { ContainerInput, Label } from '../InputDoFormulario/style';
import { Select, Option } from './style';


const SelectDoFormulario = ({ text, name, options, alterarCategoria, value, id }) => {
    return(
        <ContainerInput>
            <Label htmlFor={name}>{text}</Label>
            <Select
            name={name}
            id={id}
            onChange={alterarCategoria}
            value={value || ""}
            >
                <Option>Selecione uma Opção</Option>
                {options.map((opcao) => (
                    <Option value={opcao.id} key={opcao.id}>{opcao.name}</Option>
                ))};
            </Select>
        </ContainerInput>
    )
};

export default SelectDoFormulario;