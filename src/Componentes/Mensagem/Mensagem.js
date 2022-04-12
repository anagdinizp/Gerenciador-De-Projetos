import { useState } from 'react';
import { Msg } from "./style";

const Mensagem = ({ type, msg }) => {
    const [visivel, setVisivel] = useState()
    return(
        <Msg type={type}>{msg}</Msg>
    )
};

export default Mensagem;