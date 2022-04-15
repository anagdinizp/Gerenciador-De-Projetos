import styled from 'styled-components';

export const Msg = styled.div`
    ${({visivel}) => visivel ? `     
    width: 100%;
    padding: 1em;
    border: 1px solid lightgrey;
    border-radius: 5px;
    margin: 0 auto;
    margin-bottom: 2em;
    text-align: center;
    color: lightgrey;
    ` : `display: none`}
`;
