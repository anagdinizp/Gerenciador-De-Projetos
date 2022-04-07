import React from 'react';
import { BotaoSubmit } from './style';

const SubmitDoFormulario = ({ text }) => {
    return(
        <>
            <BotaoSubmit>{text}</BotaoSubmit>
        </>
    )
};

export default SubmitDoFormulario;