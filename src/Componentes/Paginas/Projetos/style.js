import styled from 'styled-components';

export const ContainerProjetos = styled.div`
    padding: 2em;
`;

export const Titulo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
    align-items: left;
`;

export const Caixa = styled.div`
    justify-content: flex-start;
`;

export const Ahref = styled.a`
    font-weight: bold;
    color: #ffbb33;
    text-decoration: none;
    background-color: #222;
    padding: 0.5em;
    margin-left: 600px;
    :hover {
        cursor: pointer;
        color: white;
    }
`;