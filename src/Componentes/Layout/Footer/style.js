import styled from 'styled-components';

export const Rodape = styled.footer`
    background-color: #222;
    font-size: 0.8em;
    text-align: center;
    padding: 3em;
    color: #fff;
    margin-top: 18%;
`;

export const Lista = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
`;

export const Item = styled.li`
    margin: 0 1em;
    justify-items: center;
    :hover {
        color: #ffbb33;
        cursor: pointer;
    }
`;

export const Paragrafo = styled.p`
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5em;
`;
