import api from '../../../Services/api';
import { useState, useEffect } from 'react';
import { ContainerProjetos, Titulo, Caixa, Ahref} from './style';
import { H1} from "../Inicio/style";
import CardDoProjeto from '../../Projeto/CardDoProjeto/CardDoProjeto';
import { useMensagem } from '../../../Mensagem/Mensagem';

const Projetos = () => {
    const [projetos, setProjetos] = useState("");
    const { mostrarMensagem } = useMensagem();

    useEffect(() => {
        setTimeout(() => {
            api
                .get("/projetos")
                .then((dados) => {
                    setProjetos(dados.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }, 3000)
    }, []);

    const removerProjetos = (id) => {
        api
            .delete(`/projetos/${id}`)
            .then((dados) => {
                setProjetos(projetos.filter((projeto) => projeto.id !== id))
                mostrarMensagem('O Projeto foi removido com sucesso.')
            })
            .catch((err) => {
                mostrarMensagem('Houve um problema na remoção desse projeto.')
            });

    };

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
                    removerProjetos={removerProjetos}
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