import React from 'react';
import { ContainerLoader, Loader } from "./style";
import svg from '../../../Assets/Loader.svg'

const Loading = () => {

    return(
        <ContainerLoader>
            <Loader src={svg} alt="Loading"/>

        </ContainerLoader>
    );
};

export default Loading;