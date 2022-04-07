import React, { useEffect, useState } from 'react';
import { Form } from './style';
import InputDoFormulario from '../../Formulario/InputDoFormulario/InputDoFormulario';
import SelectDoFormulario from '../../Formulario/SelectDoFormulario/SelectDoFormulario';
import SubmitDoFormulario from '../../Formulario/SubmitDoFormulario/SubmitDoFormulario';
import api from '../../../Services/api';

const FormularioDoProjeto = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        api
            .get("/categorias")
            .then((dados) => {
                setCategorias(dados.data)
                console.log(dados)
            .catch((err) => {
                console.error(err)
            });
            });
    }, []);
    

    return(
        <Form>
                <InputDoFormulario type='text' text='Nome do Projeto' name='Nome' placeholder='Digite o nome do novo projeto'/>
                <InputDoFormulario  type='number' text='Orçamento do Projeto' name='Orçamento' placeholder='Digite o orçamento do novo projeto'/>
                <SelectDoFormulario name="Categoria" text='Selecione a categoria' options={categorias}/>
                <SubmitDoFormulario text='Criar projeto'/>
        </Form>
    )
};

export default FormularioDoProjeto;