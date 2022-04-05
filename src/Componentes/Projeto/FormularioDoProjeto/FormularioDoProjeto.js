import React from 'react';
import { Form } from './style';
import InputDoFormulario from '../../Formulario/InputDoFormulario/InputDoFormulario';
import SelectDoFormulario from '../../Formulario/SelectDoFormulario/SelectDoFormulario';

const FormularioDoProjeto = () => {
    return(
        <Form>
                <InputDoFormulario type='text' text='Nome do Projeto' name='Nome' placeholder='Digite o nome do novo projeto'/>
                <InputDoFormulario  type='number' text='Orçamento do Projeto' name='Orçamento' placeholder='Digite o orçamento do novo projeto'/>
                <SelectDoFormulario name="Categoria" text='Selecione a categoria'/>
                <input type='submit' value='Criar projeto'></input>
            </Form>
    )
};

export default FormularioDoProjeto;