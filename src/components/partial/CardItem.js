/**
 * Created by vulong on 08/11/2019.
 */
import React from 'react';

import {
    Flex,
    Box,
    Card,
    Image,
    Heading,
    Text
} from 'rebass';

const CardDemo = (props) =>{
    return(
    <Flex>
        <Box
            p={3}
            width={1/3}
            color='white'
            bg='black'>
            Flex
        </Box>
        <Box
            p={3}
            width={1/3}
            color='white'
            bg='secondary'>
            Box
        </Box>
        <Box width={400}>
            <Card
                sx={{
                    p: 1,
                    borderRadius: 2,
                    boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                }}>
                <Image src={props.image} />
                <Box px={2}>
                    <Heading as='h5'>
                        {props.title}
                    </Heading>
                    <Text fontSize={3}>
                        You can edit this code
                    </Text>
                </Box>
            </Card>
        </Box>
    </Flex>

    )
};

export default CardDemo;