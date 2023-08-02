import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CustomButtons = () => {
  return (
    <Box display="flex" justifyContent="space-between" gap={10} marginLeft={3} alignItems="center">
        <Button variant='contained' 
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
    </Box>
  )
}

export default CustomButtons