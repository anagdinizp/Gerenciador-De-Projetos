import React, { createContext, useEffect, useState, useContext } from "react";
import { Msg } from "./style";

const MensagemContexto = createContext();
    
const Mensagem = ({ mensagem }) => {
    const [visivel, setVisivel] = useState(false);
    useEffect(() => {
        if(!mensagem){
            setVisivel(false)
            
        } else{
            setVisivel(true)
        }
    }, [mensagem])

    const mostrarMensagem = (mensagem) => {
        if (visivel){
            return(mensagem);
        };
    }

    return(
        <MensagemContexto.Provider value={{mostrarMensagem}}>
            <Msg mostrarMensagem={mostrarMensagem}/>
        </MensagemContexto.Provider>
    );
};

const usarMensagem = () => {
    const context = useContext(MensagemContexto);
    if(!context){
        throw new Error('Algo não está certo')
    }
    return context;
};

export {Mensagem, usarMensagem};