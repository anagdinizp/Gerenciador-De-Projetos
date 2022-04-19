import { useNavigate } from 'react-router-dom';
import api from '../../../Services/api';
import { NewProject } from "./style";
import { H1 } from '../../Paginas/Inicio/style';
import {Paragrafo} from '../../Layout/Footer/style';
import FormularioDoProjeto from "../../Projeto/FormularioDoProjeto/FormularioDoProjeto";
import { useMensagem } from '../../../Mensagem/Mensagem';

const NovoProjeto = () => {
    const navigate = useNavigate();
    const { mostrarMensagem } = useMensagem();
    const metodoPost = (projetos) => {
        

        const body = {
            name: projetos.name,
            custos: projetos.custos,
            categorias: projetos.categorias,
        }
        api
            .post("/projetos", body)
            .then((dados) => {
                navigate('/Projetos')
                mostrarMensagem('O Projeto foi criado com sucesso.')
                
            })
            .catch((err) => {
                mostrarMensagem('Houve um problema na criação do projeto.')
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