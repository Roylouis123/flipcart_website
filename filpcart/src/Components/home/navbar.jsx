import { Box } from '@mui/material'
import React from 'react'
import { map } from 'lodash'
import { navData } from '../../constants'

const Navbar = () => {
  return (
    <Box style={{display:"flex", justifyContent:"space-evenly", gap:10}}>
        {map(navData,(u)=>(
          <Box>
            <img src={u.url} alt="" height={74}/>
            <p>{u.text}</p>
          </Box>
      ))}
    </Box>
  )
}

export default Navbar