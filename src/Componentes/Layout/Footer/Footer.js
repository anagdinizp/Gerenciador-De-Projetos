import React from 'react';
import { Rodape, Lista, Item, Paragrafo } from './style';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return(
        <>
            <Rodape>
                <Lista>
                    <Item> <FaInstagram/> </Item>
                    <Item> <FaLinkedin/> </Item>
                    <Item> <FaTwitter/> </Item>
                </Lista>
                <Paragrafo> Costs &copy; 2021</Paragrafo>
            </Rodape>
        </>
    )
};

export default Footer;