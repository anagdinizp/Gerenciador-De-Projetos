import { useNavigate } from 'react-router-dom';
import api from '../../../Services/api';
import { NewProject } from "./style";
import { H1 } from '../../Paginas/Inicio/style';
import {Paragrafo} from '../../Layout/Footer/style';
import FormularioDoProjeto from "../../Projeto/FormularioDoProjeto/FormularioDoProjeto";
import { usarMensagem } from '../../../Mensagem/Mensagem';

const NovoProjeto = () => {
    const navigate = useNavigate();
    const { Mensagem } = usarMensagem();
    const metodoPost = (projetos) => {
        

        const body = {
            name: projetos.name,
            custos: projetos.custos,
            categorias: projetos.categorias,
        }
        api
            .post("/projetos", body)
            .then((dados) => {
                console.log(dados.data)
                navigate('/Projetos')
                Mensagem('O Projeto foi criado com sucesso.')
                
            })
            .catch((err) => {
                console.error(err)
                Mensagem('Houve um problema na criação do projeto.')
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