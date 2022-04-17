import {Card, H4, P, Funcionalidades, Span, Bolinha, Categorias, ALink, BotaoCard} from './style'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs';

const CardDoProjeto = ({name, id, categorias, custos, removerProjeto}) => {
    return(
        <Card>
            <H4>{name}</H4>
            <P>
                <Span>Orçamento:</Span> R${custos}
            </P>
            <Categorias>
                <Bolinha></Bolinha> {categorias}
            </Categorias>
            <Funcionalidades>
                <ALink href='/'>
                    <BsPencil/> Editar
                </ALink>
                <BotaoCard>
                    <BsFillTrashFill/> Remover
                </BotaoCard>
            </Funcionalidades>
        </Card>
    );

};

export default CardDoProjeto;