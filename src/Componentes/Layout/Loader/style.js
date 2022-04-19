import styled from 'styled-components';

export const ContainerLoader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Loader = styled.img`
    margin-top: 150px;
    margin-left: 400px;
    padding: 100px;
    width: 100px;
    position: absolute;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin l4s linear infinite;

    @keyframes spin {
        100% { -moz-transform: rotate(360deg); }
    }
    
    @keyframes spin {
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
        
    }
`;