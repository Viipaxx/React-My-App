
import { Layout } from './components/Layout';

import {
  Center,
  ChakraProvider,
  Input,
  Box,
  Button
} from '@chakra-ui/react'
import { Card } from './components/Card';


function App() {
  return (
    <ChakraProvider>
      <Layout>
        <Box minHeight='100vh' backgroundColor='#9413dc' color='black' padding='25px'>
          <Card />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
