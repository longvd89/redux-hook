import React, { useCallback } from 'react';
import Counter from './Counter';
import { Label, Input } from '@rebass/forms'
import { Flex, Box } from 'rebass'
import {useDropzone} from 'react-dropzone';
import styled from 'styled-components';


const CustomBox = styled(Box)`
    background-color: #8EC5FC;
    background-image: linear-gradient(135deg, #8EC5FC 0%, #E0C3FC 100%);
    height:200px;
`;
const SectionContainer = styled.div`
  width: 100%;
  padding: 0 7%;
  display: table;
  margin: 0;
  max-width: none;
  background-color: #373B44;
  height: 100vh;
  
  &:nth-of-type(2n) {
    background-color: #FE4B74;
  }`;
function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        console.info('-CALL back : ', acceptedFiles);
        // Do something with the files
    }, []);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <CustomBox {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }
        </CustomBox>
    )
}



function Contact() {
    return (
        <React.Fragment>
            {/*<SectionContainer>*/}
                {/*<h2>Contact test page</h2>*/}
            {/*</SectionContainer>*/}
            <SectionContainer>
                <h2>Section 2</h2>
                <Counter/>
                <CustomBox
                    p={1}
                    width={1}
                    color='white'>
                    <MyDropzone/>
                </CustomBox>
            </SectionContainer>

        </React.Fragment>
    );

}

export default Contact;