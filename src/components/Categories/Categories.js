import React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Categories = ({ categories, getCocktailsByCategoryUI, category }) => {

    console.log(getCocktailsByCategoryUI)
    return (
        
        <Box >
    <FormControl style={{width: 300}}>
      <Select
        onChange={getCocktailsByCategoryUI}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={category}
      > 
         {categories.map(el => {
                const { strCategory } = el
                return (
                  
                    <MenuItem key={strCategory} value={strCategory}>{strCategory}</MenuItem>
                    
                )
            })}
      </Select>
    </FormControl>
  
  </Box>
          
    );
    
    }

export default Categories