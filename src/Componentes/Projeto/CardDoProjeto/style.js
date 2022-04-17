import styled from 'styled-components';

export const Card = styled.div`
    padding: 1em;
    border: 1px solid #7a7a7a;
    border-radius: 5px;
    width: 25%;
    margin: 0.5%
`;

export const P = styled.p`
    color: #7a7a7a;
    margin-bottom: 1em;
`;

export const Funcionalidades = styled.div`
    margin-top: 1.2em;
    display: flex;
    align-items: center;
`;

export const H4 = styled.h4`
    background-color: #222;
    color: #FFBB33;
    padding: 0.4em;
    margin-bottom: 1.3em;
    font-size: 1.3em;
    text-align: center;
    margin-top: 0;
`;

export const Span = styled.span`
    font-weight: bold;
`;

export const Categorias = styled.p`
    display: flex;
    align-items: center;
    color: #ffbb33;
    font-weight: bold;
`;

export const Bolinha = styled.span`
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #ffbb33;
    margin-right: 5px;
`;

export const ALink = styled.a`
    text-decoration: none;
    border: none;
    background-color: #fff;
    color: #222;
    font-size: 0.9em;
    padding: 0.6em 1em;
    margin-right: 1em;
    cursor: pointer;
    border: 1px solid #222;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: #222;
        color: #ffbb33;
    }
`;

export const BotaoCard = styled.button`
    text-decoration: none;
    border: none;
    background-color: #fff;
    color: #222;
    font-size: 0.9em;
    padding: 0.6em 1em;
    margin-right: 1em;
    cursor: pointer;
    border: 1px solid #222;
    border-radius: 4px;
    padding: 0.7em;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
        background-color: #222;
        color: #ffbb33;
    }
`;