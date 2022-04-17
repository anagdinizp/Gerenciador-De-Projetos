import React, { createContext, useState, useContext } from "react";
import { Msg } from "./style";

const MensagemContexto = createContext();
    
const Mensagem = ({ children }) => {
    const [visivel, setVisivel] = useState(false);
    const [mensagem, setMensagem] = useState("");

    const mostrarMensagem = (mensagem) => {
        setVisivel(true);
        setMensagem(mensagem);
        setTimeout(() => {
            setVisivel(false);
            setMensagem("");
        }, 3000)
        return mensagem;
    }

    return(
        <MensagemContexto.Provider value={{mostrarMensagem}}>
            {visivel ? <Msg>{mensagem}</Msg> : <></>}
            
            {children}
        </MensagemContexto.Provider>
    );
};

const useMensagem = () => {
    const context = useContext(MensagemContexto);
    if(!context){
        throw new Error('Algo não está certo')
    }
    return context;
};

export {Mensagem, useMensagem};