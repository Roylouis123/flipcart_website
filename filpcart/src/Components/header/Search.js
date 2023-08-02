import { Box, InputBase } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <Box display='flex' bgcolor={"white"} width={'35%'} borderRadius={0.5} marginLeft={1}>
    <InputBase 
    placeholder='search for products, brands and more'
     style={{marginLeft:14, width:"100%"}}
      />
      <Box><SearchIcon style={{color:"#2874f0",padding:"5px"}}/></Box>
    </Box>
  )
}

export default Search