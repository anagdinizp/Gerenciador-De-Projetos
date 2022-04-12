import React, { useEffect, useState } from 'react';
import { Form } from './style';
import InputDoFormulario from '../../Formulario/InputDoFormulario/InputDoFormulario';
import SelectDoFormulario from '../../Formulario/SelectDoFormulario/SelectDoFormulario';
import SubmitDoFormulario from '../../Formulario/SubmitDoFormulario/SubmitDoFormulario';
import api from '../../../Services/api';

const FormularioDoProjeto = ({ metodoPost, projetoData }) => {
    const [categorias, setCategorias] = useState([]);
    const [projeto, setProjeto] = useState(projetoData || {});

    useEffect(() => {
        api
            .get("/categorias")
            .then((dados) => {
                setCategorias(dados.data)
            })
            .catch((err) => {
                console.error(err)
            });
    }, []);
    
    const submit = (evento) => {
        evento.preventDefault()
        metodoPost(projeto)

    };

    const alterarNome = (evento) => {
        setProjeto({...projeto, [evento.target.name]: evento.target.value})
    };

    const alterarCategoria = (evento) => {
        setProjeto({...projeto, categorias: {
            id: evento.target.value,
            name: evento.target.options[evento.target.selectedIndex].text,
            }
        })
        console.log(evento.target)
    };

    return(
        <Form onSubmit={submit}>
            <InputDoFormulario
                type='text'
                text='Nome do Projeto'
                name='name'
                placeholder='Digite o nome do novo projeto'
                alterarNome={alterarNome}
                value={projeto.name ? projeto.name : "" }
            />
            <InputDoFormulario
                type='number'
                text='Orçamento do Projeto'
                name='custos'
                placeholder='Digite o orçamento do novo projeto'
                alterarNome={alterarNome}
                value={projeto.custos ? projeto.custos : "" }
            />
            <SelectDoFormulario
                alterarCategoria={alterarCategoria}
                name="Categoria"
                text='Selecione a categoria'
                options={categorias}
                value={projeto.categorias ? projeto.categorias.id : ""}
            />
            <SubmitDoFormulario text='Criar projeto' />
        </Form>
    )
};

export default FormularioDoProjeto;