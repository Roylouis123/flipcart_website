import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialogue from '../login/loginDialogue';

const CustomButtons = () => {


  const [open,setopen]=useState(false);

  
  return (
    <Box display="flex" justifyContent="space-between" gap={10} marginLeft={3} alignItems="center">
        <Button variant='contained' onClick={()=>{setopen(true);}}
        style={{
            background:"#fff", 
            color:"blue", 
            width:"120px", 
            padding:"3px 40px",
            textTransform:"none",
            "boxShadow":"none",
            borderRadius:"1px",
            }}>Login</Button>

        <Typography>Become a seller</Typography>
        <Typography>More</Typography>

        <Typography><ShoppingCartIcon/></Typography>
        <LoginDialogue open={open} setopen={setopen}/>
            </Box>
  )
}

export default CustomButtons