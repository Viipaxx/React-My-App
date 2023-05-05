
import {Center,Input,Box,Button} from '@chakra-ui/react'
import { login } from './services/login'
import { useState, useEffect } from 'react';
import { api } from './api';

interface userData {
    email: string
    password: string
    name: string
}

export const Card = () => {

    const [email, setEmail] = useState('')
    const [ userData, setUserData ] = useState<null | userData>()

    useEffect(() => {
        const getData = async () => {
            const data: any | userData = await api
            setUserData(data)
        }
        getData()
    })

    console.log(userData)

return (
    <Box bgColor='#FFFFFF' borderRadius='25px' padding='15px'>
        <Center>
            <h1>Faça o login</h1>
        </Center>
        <Input placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)}  />
        <Input placeholder='password' />
        <Center>
            <Button 
            onClick={() => login(email)} 
            colorScheme='teal' 
            size='sm' width='100%' marginTop='5px'>
                Entrar
            </Button>
        </Center>
    </Box>
);
}