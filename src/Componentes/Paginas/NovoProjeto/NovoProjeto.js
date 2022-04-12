import { useNavigate } from 'react-router-dom';
import api from '../../../Services/api';
import { NewProject } from "./style";
import { H1 } from '../../Paginas/Inicio/style';
import {Paragrafo} from '../../Layout/Footer/style';
import FormularioDoProjeto from "../../Projeto/FormularioDoProjeto/FormularioDoProjeto";

const NovoProjeto = () => {
    const navigate = useNavigate();

    const metodoPost = (projetos) => {
        const body = {
            name: projetos.name,
            custos: projetos.custos,
            categorias: projetos.categorias,
        }
        console.log(body)
        api
            .post("/projetos", body)
            .then((dados) => {
                console.log(dados.data)
                navigate('/Projetos')
            })
            .catch((err) => {
                console.error(err)
            });
    };

    return(
        <NewProject>
            <H1>Criar Projeto</H1>
            <Paragrafo>Crie seu projeto para depois adicionar os serviços</Paragrafo>
            <FormularioDoProjeto metodoPost={metodoPost}/>
        </NewProject>
    );
};

export default NovoProjeto;