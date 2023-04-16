import React, {useState} from 'react';

import { Box, Flex } from "@chakra-ui/react";
import './App.css';
import GlobalNavBar from "./components/GlobalNavBar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

function App() {
    const [isClicked, setIsClicked] = useState('menu')
  return (
      <div className='body-div'>
          <GlobalNavBar
              isClicked={isClicked}
              setIsClicked={setIsClicked}
          />
          <Flex flexDirection='row'>
              {isClicked == 'home' ? (
                  <HomePage
                      isClicked={isClicked}
                      setIsClicked={setIsClicked}
                  />
              ):
                  <AboutPage />
              }
          </Flex>
      </div>
  );
}

export default App;
