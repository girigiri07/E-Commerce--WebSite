import {
     Typography ,
     Box,
     TextField,
     Button,
     Grid
    } from '@mui/material'
import React from 'react'
import RegisterSchema from '../utils/RegisterValidation/RegisterSchema'
import registerType from '../utils/RegisterValidation/RegisterTypes'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import '../PageStyle/MainStyle.scss'
const subTitle = "Save The Day"
const desc = "Limited Time Offer! Hurry Up"

export const RegisterPage = () => {
    const {
        control : registerController,
        formState: { errors: registerErrors },
        handleSubmit,
        reset,
    } = useForm<registerType>({
        criteriaMode: "all",
        defaultValues : {
            name:'',
            email:'',
            number:0,
           
        },
        mode: "all",
        reValidateMode: "onChange",
        resolver:yupResolver(RegisterSchema)
    })

    const handleRegisterData = (registerData:any) => {
        console.log(registerData)
    }
  return <Typography className='register-section' sx={{
//    height:'500px',
    position:'relative',
    top:'30px'
  }}>
   <Typography className='container' sx={{
    padding:'50px'
   }}>
   <Grid 
   container
   spacing={4}
   alignItems="center"
   >
   <Typography className='section-header' sx={{
    position:'relative',
    left:'250px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    // alignItems:'center'
   }}>
        <Typography sx={{
            color:'#ffdf40',
            marginBottom:'10px'
        }}>
        {subTitle}
        </Typography>
        <Typography sx={{
             marginBottom:'10px'
        }}>
            Join on Day Long Free WorkShop for  
            <br />
          
        <Typography sx={{
            display:'flex',
            gap:'5px'
        }}>
            Advance
        <Box sx={{
                color:'yellow',
                // position:'relative',
                // right:'30px'
            }}>
             Mastering
            </Box>
            <Typography  >
              On Sales
            </Typography>
        </Typography>
         
        </Typography>
        <Typography sx={{
             marginBottom:'10px'
        }}>
            {desc}
        </Typography>
    </Typography>
       

<Typography className='section-wrapper ' sx={{
    position:'relative',
    top:'20px',
    // bottom:'30px',
    right:'100px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'10px',
    background:'linear-gradient(90deg , white , violet)',
    width:'400px',
    maxHeight:'700px'
    // backgroundColor:'linear - gradient(to top, #733270, #733270a6, #73327030, #73327000, #73327000)'
    
    // justifyContent:'center'
}}>
    <Typography variant='h4'sx={{
        marginBottom:'10px',
        fontSize:'20',
        fontWeight:'bold'
    }}>
        Register Now 
    </Typography>
<Typography className='register-form' sx={{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    gap:'20px'
}}>
<Controller 
   control={registerController}
   name='name'
   defaultValue={''}
   render={({field : {onChange , ref , value , name} , formState} ) =>{
       return(
           <TextField 
           
           name={name}
           type='text'
           onChange={onChange}
           value={value}
           label='UserName'
           variant='outlined'
           sx={{
           width:'400px',
           background:'white',
           borderRadius:'5px'
           }}
           />
       )
   } }
   />
   <Controller 
   control={registerController}
   name='email'
   defaultValue={''}
   render={({field : {onChange , ref , value , name} , formState} ) =>{
       return(
           <TextField 
           name={name}
           type='email'
           onChange={onChange}
           value={value}
           label='Email'
           variant='outlined'sx={{
           width:'400px',
           background:'white',
           borderRadius:'5px'
           }}
           />
       )
   } }
   />
   <Controller 
   control={registerController}
   name='number'
  
   render={({field : {onChange , ref , value , name} , formState} ) =>{
       return(
           <TextField 
           name={name}
           type='number'
           onChange={onChange}
           value={value}
           label='Phone'
           variant='outlined'
           sx={{
           width:'400px',
           background:'white',
           borderRadius:'5px'
           }}
           />
       )
   } }
   />

   <Typography>
    <Button onClick={handleSubmit(handleRegisterData)} sx={{
  
        textDecoration:'none',
        color:'black',
        background: '#ffdf40',
        border: '2px solid #ffdf40',
        fontWeight:'bold',
       " &:hover":{
        backgroundColor:'#ffdf40',
        boxShadow:'0  5px  10px'
       
       }

    }}>
   Register Now
    </Button>
   </Typography>
</Typography>
</Typography>
   </Grid>
   </Typography>
   

   </Typography>
  
}
