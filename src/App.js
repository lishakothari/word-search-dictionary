import { Container } from '@mui/system';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Definitions } from './components/Definitions/Definitions';
import { Header } from './components/Header/Header';

function App() {

  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [language, setLanguage] = useState("en");

  const api = async() => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${language}/${word}`
      )
      setMeanings(data.data)
    }
    catch (error) {
      console.log(error);
    }
  }

 // console.log(meanings);

  useEffect(() => {
    api();
  }, [word, language]);

  return (
    <div className='App'>
        <Container className='Container' maxWidth="md">
          <Header 
            language={language} 
            setLanguage={setLanguage} 
            word={word} 
            setWord={setWord}
          />
            
          {meanings && (
            <Definitions 
            word={word}
            meanings={meanings}
            language={language}
            />
          )}
          
        </Container>
    </div>
  );
}

export default App;
