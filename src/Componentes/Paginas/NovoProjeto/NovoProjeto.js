import { NewProject } from "./style";
import { H1 } from '../../Paginas/Inicio/style';
import {Paragrafo} from '../../Layout/Footer/style';
import FormularioDoProjeto from "../../Projeto/FormularioDoProjeto/FormularioDoProjeto";

const NovoProjeto = () => {
    return(
        <NewProject>
            <H1>Criar Projeto</H1>
            <Paragrafo>Crie seu projeto para depois adicionar os serviços</Paragrafo>
            <FormularioDoProjeto></FormularioDoProjeto>
        </NewProject>
    );
};

export default NovoProjeto;