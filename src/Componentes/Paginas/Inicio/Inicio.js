import { Home, Link, H1} from "./style";
import { Paragrafo } from "./../../Layout/Footer/style"


const Inicio = () => {
    return(
        <Home>
            <H1>Bem-vindo ao Costs</H1>
            <Paragrafo>Comece a gerenciar os seus projetos agora mesmo!</Paragrafo>
            <Link href="/NovoProjeto">Criar Projeto</Link>
        </Home>
    );
};

export default Inicio;