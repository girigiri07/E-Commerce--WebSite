import { Button, TextField, Typography , Box , Paper } from '@mui/material'
import React from 'react'
import { PageHeader } from '../Componets/PageHeader'

import { GoogleMap } from './GoogleMap';
import contactTypes from '../utils/ContactPageValidation/ContactPageTypes';
import ContactSchema from '../utils/ContactPageValidation/ContactPageSchema';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
"Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
{
imgUrl: "/images/icon/01.png",
imgAlt: "contact icon",
title: "Office Address",
desc: "1201 park street, Fifth Avenue",
},
{
imgUrl: "/images/icon/02.png",
imgAlt: "contact icon",
title: "Phone number",
desc: "+22698 745 632,02 982 745",
},
{
imgUrl: "/images/icon/03.png",
imgAlt: "contact icon",
title: "Send email",
desc: "admin@shopcart.com",
},
{
imgUrl: "/images/icon/04.png",
imgAlt: "contact icon",
title: "Our website",
desc: "www.shopcart.com",
},
];
export const ContactPage = () => {
    const {
        control : ContactController,
        formState: { errors: ContactErrors },
        handleSubmit,
        reset,
    } = useForm<contactTypes>({
        criteriaMode: "all",
        defaultValues : {
            name:'',
            email:'',
            number:'',
            subject:'',
            message:'',
        },
        mode: "all",
        reValidateMode: "onChange",
        resolver:yupResolver(ContactSchema)
    })
    const handleContactData = (contactData:any) =>{
        console.log(contactData)
    }
  return  <Typography>


       <Typography>
       <PageHeader title="Get In Touch with US" curPage="Contact Us"/>
       </Typography>

<Typography sx={{

    marginTop:'30px',
    backgroundColor:"lightgoldenrodyellow"
}}>
    
<Typography sx={{
     marginBottom:'15px'
}}>
        <Typography variant='body1' sx={{
            color:'orangered',
            margin:'10px',
            textAlign:'center'
        }}>
            {subTitle}
        </Typography>
        <Typography variant='h4' sx={{
            // color:'orangered',
            margin:'10px',
            textAlign:'center',
            fontWeight:'bold',
           
        }}>
            {title}
        </Typography>
       </Typography>

      <Typography sx={{
        display:'flex',
        justifyContent:'space-around'
      }}>



        <Box >
        <Typography  sx={{
            // width:500,
            // height:200
        }}>
        <GoogleMap />
       </Typography>
        </Box>
      

       <Typography >
        {
            contactList.map((data,index)=>(

                <Typography key={index} component={Paper} sx={{
                    display:'flex',
                    gap:2,
                    padding:'10px',
                    marginBottom:'10px'
                   }}>

                    <Box sx={{
                        display:'flex',
                        alignItems:'center'
                    }}>
                    <img src={data.imgUrl} alt='' />

                    </Box>
                   
                <Typography>
                <Typography variant='h6' sx={{
                    marginBottom:'10px',
                    fontWeight:'bold'
                }}>
            {data.title}
        </Typography>

        <Typography variant='body1'  sx={{
                    marginBottom:'10px',
                  color:'#555555'
                }}>
            {data.desc}
        </Typography>
                    </Typography>

                    </Typography>
            ))
        }
       </Typography>

      </Typography>
       




</Typography>

<Typography sx={{
    marginTop:'50px'
}}>
<Typography sx={{
            color:'orangered',
            margin:'10px',
            textAlign:'center'
        }}>
            {conSubTitle}
        </Typography>

        <Typography variant='h4' sx={{
            // color:'orangered',
            margin:'10px',
            textAlign:'center',
            fontWeight:'bold'
        }}>
            {conTitle}
        </Typography>


</Typography>

<Typography sx={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}}>
<Typography component={Paper} 
sx={{
    padding:'10px',
    margintop:'15px',
    


}} >


<Typography sx={{
    display:'flex',
    gap:2,
    marginBottom:'15px',
    padding:'10px'
}}>
<Controller 
        control={ContactController}
        name='name'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='Your Name'
                variant='outlined'
                sx={{
                    width:'300px'
                }}
                />
            )
        } }
        />
        <Controller 
        control={ContactController}
        name='email'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='email'
                onChange={onChange}
                value={value}
                label='Your Email'
                variant='outlined'
                sx={{
                    width:'300px'
                }}
                />
            )
        } }
        />
</Typography>



       <Typography sx={{
    display:'flex',
    gap:2,
    marginBottom:'15px',
    padding:'10px'
}}>
       <Controller 
        control={ContactController}
        name='number'
        defaultValue={0}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='Mobile Number'
                variant='outlined'
                sx={{
                    width:'300px'
                }}
                />
            )
        } }
        />
          <Controller 
        control={ContactController}
        name='subject'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='Your Subject'
                variant='outlined'
                sx={{
                    width:'300px'
                }}
                />
            )
        } }
        />
       </Typography>



       <Typography sx={{
         marginBottom:'15px',
         padding:'10px'
       }}>
       <Controller 
        control={ContactController}
        name='message'
        defaultValue={''}
        render={({field : {onChange , ref , value , name} , formState} ) =>{
            return(
                <TextField 
                name={name}
                type='text'
                onChange={onChange}
                value={value}
                label='Your Message'
                variant='outlined'
                sx={{
                    width:'600px',
                   
                }}
                />
            )
        } }
        />
       </Typography>


<Typography sx={{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}}>
<Button onClick={handleSubmit(handleContactData)} sx={{
            backgroundColor:'orangered',
            
            color:'white',
            fontWeight:'bold',
            "&:hover":{
                backgroundColor:'orange',
                color:'white',
                fontWeight:'bold',
            }
        }}>
            Send Our Message
        </Button>
</Typography>

       


</Typography> 
</Typography>




    </Typography>
  
}
