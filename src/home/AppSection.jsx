import { Button, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import '../PageStyle/MainStyle.scss'
const btnText = "Sign Up for Free"
const title = "Shop AnyTime, AnyWhere"
const desc = " Take Shop On Your any Device With Our App & Learn All time What You Want. Just download & Install & Start To Learn"


export const AppSection = () => {
  return  <Typography className='app-section' sx={{
    marginTop:'20px'
  }}>
        <Typography className='section-header' sx={{
             marginBottom:'20px'
        }}>
        <Link to='/sign-up' className='edit-decoration'>
           <Typography sx={{
            display:'flex',
            justifyContent:'center',
            marginBottom:'20px'
           }}>
             <Button  sx={{
               
               textAlign:'center',
               color:'black',
       backgroundColor:'white',
       border: '2px solid #ffdf40',
       fontWeight:'bold',
      " &:hover":{
       background:'yellow',
       boxShadow:'0  5px  10px'
      
      }
           }}>
               
               {btnText}
              
           </Button>
           </Typography>
            </Link>
            <Typography variant='h2' sx={{
                textAlign:'center',
                fontWeight:'bold',
                color:'black',
                marginBottom:'15px'
                
            }}>
                {title}
            </Typography>
            <Typography variant='body1' sx={{
                textAlign:'center',
                marginBottom:'15px'

            }}>
                {desc}
            </Typography>
        </Typography>
        <Typography className='section-wrapper'>
           <List className='lab-ul' sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
           }}>
           <ListItem sx={{
            position:'relative',
            left:'400px'
           }}>
                <a href='#'>
                    <img src='images/app/01.jpg' alt='' />
                </a>
                </ListItem>
                <ListItem>
                <a href='#'>
                    <img src='images/app/02.jpg' alt='' />
                </a>
                </ListItem>
           </List>
        </Typography>
    </Typography>
  
}
