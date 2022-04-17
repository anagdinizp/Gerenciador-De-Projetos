import api from '../../../Services/api';
import { useState, useEffect } from 'react';
import { ContainerProjetos, Titulo, Caixa, Ahref} from './style';
import { H1} from "../Inicio/style";
import CardDoProjeto from '../../Projeto/CardDoProjeto/CardDoProjeto';

const Projetos = () => {
    const [projetos, setProjetos] = useState("")

    useEffect(() => {
        api
            .get("/projetos")
            .then((dados) => {
                setProjetos(dados.data)
            })
            .catch((err) => {
                console.error(err)
            });
    }, [])

    return(
        <>
            <ContainerProjetos>
                <Titulo>
                    <H1>Projetos criados</H1>
                    {projetos.length > 0 && 
                projetos.map((projeto) => (
                    <CardDoProjeto
                    id={projeto.id}
                    name={projeto.name}
                    custos={projeto.custos}
                    categorias={projeto.categorias.name}
                    key={projeto.id}
                    ></CardDoProjeto>
                ))}
                </Titulo>
            </ContainerProjetos>
            <Caixa>
                <Ahref href='/NovoProjeto'>Criar Novo Projeto</Ahref>
                
            </Caixa>
        </>
    );
};

export default Projetos;