import React from 'react';
import { BotaoSubmit } from './style';

const SubmitDoFormulario = ({ text }) => {
    return(
        <>
            <BotaoSubmit type='submit'>{text}</BotaoSubmit>
        </>
    )
};

export default SubmitDoFormulario;