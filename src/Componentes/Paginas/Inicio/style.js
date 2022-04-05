import styled from 'styled-components';

export const Home = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4em;
`;

export const Link = styled.a`
    font-weight: bold;
    color: #ffbb33;
    text-decoration: none;
    background-color: #222;
    padding: 0.5em;
    :hover {
        cursor: pointer;
    }
`;

export const H1 = styled.h1`
    font-size: 2.5em;
    margin-bottom:  0.5em;
`;