import React from 'react';
import Container from '../Container/Container';
import { Nav, Ul, Li, A } from './style';

const Navbar = () => {
    return(
        <Nav>
            <Container>
                <Ul>
                    <Li><A href="/">Inicio</A></Li>
                    <Li><A href="/Empresa">Empresa</A></Li>
                    <Li><A href="/NovoProjeto">Novo Projeto</A></Li>
                    <Li><A href="/Contato">Contato</A></Li>
                </Ul>
            </Container>
        </Nav>
    )
};

export default Navbar;