import React from 'react';
import { Box } from './style';

const Container = (props) => {
    return(
        <Box>{props.children}</Box>
    );
}; 

export default Container;