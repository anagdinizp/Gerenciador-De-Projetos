import styled from 'styled-components';

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #222;
    padding: 1em;
`;

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    
`;

export const Li = styled.li`
    margin-right: 1em;
`;

export const A = styled.a`
    color: #fff;
    text-decoration: none;
    :hover {
        color: #ffbb33;
        cursor: pointer;
    }
`;