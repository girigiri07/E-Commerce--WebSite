import { List, ListItem, Toolbar, Typography ,Box } from '@mui/material'

import { Link } from 'react-router-dom'

import React from 'react'
import '../PageStyle/BannerStyle.scss'

export const PageHeader = ({title , curPage}) => {
  return (
    <Box>
<Typography className='pageheader-background1' sx={{
  backgroundSize:'cover',
  backgroundPosition:'center',
  height:'80vh',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}}>
   <Typography className='container' sx={{
    // marginTop:'200px',
    textAlign:'center',
   
   }}>
   <Typography variant='h2'  >
     {title}
    </Typography>
        <Typography>
          <Toolbar sx={{
            display:'flex',
            justifyContent:'center'
          }}>
          <Link to={"/"} className='edit-decoration'>
            <Typography sx={{
              color:'black'
            }}>
              HOME
            </Typography>
            </Link>
           <List>
            <ListItem aria-current="page" sx={{
              color:'#555555'
            }}>
          /  {curPage}
            </ListItem>
           </List>
        
           
            
          </Toolbar>
        </Typography>
   </Typography>

</Typography>
    </Box>

  


  ) 
}