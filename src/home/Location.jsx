import { Tooltip, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import '../PageStyle/MainStyle.scss'

const title = "More Then 60,000 Customers";

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: 'images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
]




export const Location = () => {
  return <Typography  className='clients-section style-2 ' sx={{
    position:'relative',
    top:'100px'
  }}>
  <Typography className='container'>
  <Typography className='section-header'>
  <Typography variant='h3' sx={{
    textAlign:'center',
    marginBottom:'30px'
  }}>
        {title}
    </Typography>
    <Typography variant='body1' sx={{
         marginBottom:'20px',
         textAlign:'center',
    }}>
        {desc}
    </Typography>
  </Typography>
  <Tooltip title='Join With US' placement='top' arrow >
    <Typography className='section-wrapper' sx={{
        marginTop:'60px'
    }}>
    <Typography className='clients'>
        {
            clientsList.map((items , index)=> (
                <>
                <Typography key={index} className='client-content' >
                    <Link to="/sign-up" className='edit-decoration' >
                        {/* <Typography >
                            {items.text}
                        </Typography> */}
                       
                         <Typography className='client-thumb' >
                        {/* <img src={items.imgUrl} alt='' /> */}
                    </Typography>
                      
                    </Link>
                </Typography>
               
                    </>
            ))
        }
       
    </Typography>
    </Typography>
    </Tooltip>
  </Typography>
   </Typography>
  
}
  {/* pending sign up link mattum future la change panra mari erukum  */}
//   {
//     clientsList.map((items , index)=>(
//         <Typography key={index}>
//             <Link to="/sign-up">
//         <Typography>
//             {items.text}
//         </Typography>
//         </Link>
//         <Typography>
//             <img src={items.imgUrl} alt='' />
//         </Typography>
//     ))
// }