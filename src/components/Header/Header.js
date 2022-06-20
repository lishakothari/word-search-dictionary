import { MenuItem, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import React from 'react';
import languages from '../../data/Languages';
import './Header.css';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });


export const Header = ({ language, setLanguage, word, setWord }) => {

    const handleChange = (language) => {
        setLanguage(language);
        setWord("");
    }
    
  return (
    <ThemeProvider theme={darkTheme}>
        <div className='header'>
            <span className='title'>{word ? word : "Word Hunt"} </span>

            <div className='inputs'>
            <TextField 
                className='search'
                id="standard-basic" 
                label="Search a Word" 
                variant="standard" 
                value={word}
                onChange={(e) => setWord(e.target.value)}
            />

            <TextField
                id="standard-select-language"
                select
                label="Select"
                value={language}
                onChange={(e) => handleChange(e.target.value)}
                helperText="Please select your language"
                variant="standard"
            >
                {
                    languages.map((language) => (
                        <MenuItem key={language.label} value={language.label}> {language.value} </MenuItem>
                    ))
                }
            </TextField>
            </div>
        </div>
    </ThemeProvider>
  )
}
