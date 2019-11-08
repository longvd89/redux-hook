import React, {Component} from 'react';
import Counter from './Counter';
import { Label, Input } from '@rebass/forms'
import {

    Box,
} from 'rebass';
function Contact() {
    return (
        <React.Fragment>
            <h2>Contact test page</h2>
            <Counter/>
            <Box>
                <Label htmlFor='email'>Email</Label>
                <Input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='jane@example.com'
                />
            </Box>
        </React.Fragment>
    );

}

export default Contact;