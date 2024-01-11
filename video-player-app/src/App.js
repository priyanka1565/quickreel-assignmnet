import React from 'react';
import { ChakraProvider, CSSReset, Box, extendTheme } from '@chakra-ui/react';
import VideoPlayer from './components/VideoPlayer';

const theme = extendTheme({});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box textAlign="center" fontSize="xl">
        <VideoPlayer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
