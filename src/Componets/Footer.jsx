import { Icon, List, ListItem, Typography , Grid, ListItemText } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram'
import FaceBookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
import {
    LocationOn , 
    Phone,
    Email
} from '@mui/icons-material'
import '../PageStyle/MainStyle.scss'
import '../PageStyle/FooterStyle.scss'
const title = "About ShopCart";
const desc = <p>
    Eduaid theme number one world class <br />
     university in the world There are student are <br /> studing always in this university for all time.
</p>
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
    {
        iconName: <LocationOn />,
        text: 'New York, USA.',
    },
    {
        iconName: <Phone />,
        text: '+880 123 456 789',
    },
    {
        iconName: <Email />,
        text: 'info@shopcart.com',
    },
]

const socialList = [
    {
        iconName: <FaceBookIcon /> , color:'#31877F2',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: <TwitterIcon />, color:'#1dA1F2',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: <LinkedInIcon />, color:'#0077B5',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: <InstagramIcon />, color:'#E4405F',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: <PinterestIcon />, color:'#E60023',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: <TwitterIcon />, color:'#1dA1F2',
        desc: <p>Aminur islam <br />
        <a style={{textDecoration:'none',color:'white'}} href="#">@ShopCart Greetings! <br />
         #HTML_Template</a> <br />
         Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName:<TwitterIcon />, color:'#1dA1F2',
        desc: <p>Somrat islam <br />
        <a style={{textDecoration:'none',color:'white'}}href="#">@ShopCart Hey! #HTML_Template <br />
        </a> Grab your item, 50% Big Sale Offer !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'Faculty',
        link: '#',
    },
    {
        text: 'Staff',
        link: '#',
    },
    {
        text: 'Students',
        link: '#',
    },
    {
        text: 'Alumni',
        link: '#',
    },
]
export const Footer = () => {
  return  <Typography className='style-2' sx={{
    marginTop:'20px'
  }}>
    <Typography sx={{
        backgroundColor:'black',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center'
    }}>
    {/* <Grid
    container 
    spacing={4}
    // sx={{
    //     gridTemplateColumns:'1fr , 1fr , 1fr , 1fr'
    // }}
    > */}
   <Typography sx={{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'20px',
    marginLeft:'20px'
   }}>
   <Typography variant='h5' sx={{
        color:'#fff',
        // textAlign:'center',
        fontWeight:'bold',
        position:'relative',
        right:'70px'
    }}>
        {title}
    </Typography>
    <Typography className='content' 
    sx={{
        color:'#fff',
        textAlign:'left'
    }}
    >
        {desc}
       
    </Typography>
    <Typography >
    <List className='lab-ul office-address' sx={{
        postion:'relative',
        right:'20px'
    }}>
            {
                addressList.map((data , index)=>(
                    <ListItem key={index} sx={{
                        display:'flex',
                        gap:'10px'
                    }}>
                        <Icon sx={{
                            background:'white'
                        }}>
                            {data.iconName}
                        </Icon>
                      <ListItemText sx={{
 color:'#fff'
                      }}>
                      {data.text}
                      </ListItemText>

                    </ListItem>
                ))
            }
        </List>
        <List className='lab-ul social icons' sx={{
                        display:'flex',
                        gap:'5px',
                        postion:'relative',
        right:'20px',
        bottom:'10px'
                    }}>
            {
                socialList.map((data , index)=>(
                    <ListItem key={index} sx={{
                        display:'flex',
                        gap:'5px'
                    }}>
                       <a href='#'>
                       <Icon sx={{
                        background:data.color,
                        
                            display:'flex',
                            gap:'5px'
                      
                        // width:50,
                        // heigth:100,
                       }}>
                            {data.iconName}
                        </Icon>
                        {/* {data.text} */}
                       </a>

                    </ListItem>
                ))
            }
        </List>
    </Typography>
   </Typography>
   
   <Typography sx={{
    display:'flex',
    flexDirection:'column',
    marginLeft:'20px',
    marginBottom:'40px'

   }}>
   <Typography
  variant='h5' sx={{
    postion:'relative',
    left:'50px',
    
   
    color:'#fff',
    // textAlign:'center',
    fontWeight:'bold',
    
}}
    >
        {ItemTitle}
    </Typography>
    <Typography sx={{
        // postion:'relative',
        // top:'10px',
        // marginTop:'10px'
    }}>
        
        <List sx={{
        // postion:'relative',
        // top:'20px',
        // marginTop:'10px'
    }}>
            {
                ItemList.map((data , index)=>(
                    <ListItem key={index}>
                      <a href='#' className='edit-decoration'>
                      <Typography sx={{
                        color:'white'
                     }}>
                         {data.text}
                     </Typography>
                      </a>
                       

                    </ListItem>
                ))
            }
        </List>
       
    </Typography>
   </Typography>
    <Typography 
  sx={{
        color:'#fff',
        // textAlign:'center',
        marginLeft:'20px',
        marginBottom:'40px'
       
    }}
    >
    <Typography  variant='h5' sx={{
           
        color:'white',
        fontWeight:'bold',
        position:'relative',
        left:'10px'
    }}>
        {quickTitle}
    </Typography>
    <Typography>
        
        <List>
            {
                quickList.map((data , index)=>(
                    <ListItem key={index}>
                      <a href='#' className='edit-decoration'>
                     <Typography sx={{
                        color:'white'
                     }}>
                         {data.text}
                     </Typography>
                      </a>
                       

                    </ListItem>
                ))
            }
        </List>
       
    </Typography>
    </Typography>
    
    
   <Typography
  sx={{
   marginBottom:'10px',
   marginLeft:'10px',
   gap:'10px'
}}
   >
   <Typography   variant='h5'   sx={{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold'
    }}>
        {tweetTitle}
    </Typography>
    <Typography>
        
        <List>
            {
                tweetList.map((data , index)=>(
                    <ListItem key={index}>
                   <Icon sx={{
                    backgroundColor:data.color,
                    marginRight:'10px',
                    marginBottom:'10px'
                    // postion:'relative',
                    // bottom:'10px'
                   }}>
                    {data.iconName}
                   </Icon>
                   <Typography className='edit-decoration' sx={{
                        color:'white',
                        textDecoration:'none'
                     }}>
                         {data.desc}
                     </Typography>

                    </ListItem>
                ))
            }
        </List>
       
    </Typography>
   </Typography>
    {/* </Grid> */}
    </Typography>

    <Typography sx={{
        marginTop:'20px',
        display:'flex',
        justifyContent:'space-between'
    }}>
        <Typography sx={{
           marginLeft:'50pxx',
           display:'inline-flex',
           margin:'10px'
          
        }}>
            &copy;2024 <Link className='edit-decoration' to="/">
               <Typography sx={{
                color:'black',
                marginLeft:'10px',
                marginRight:'10px'
               }}>
               Shop Cart 
               </Typography>
                
                </Link>  
                
                Designed By 
              
               
               <a className='edit-decoration' href='#' target='_blank'>
               <Typography
                sx={{
                    color:'black',
                    marginLeft:'10px'
                   }}>
                GIRI 
                
               </Typography>
            </a>


        </Typography>
        <Typography sx={{
            marginRight:'50px',

        }}>
            {
                footerbottomList.map((footData , index)=>(
                  <Typography key={index} sx={{
                    display:'inline-flex',
                    margin:'10px',
                    color:'black'
                  }}>
                      <a href='#'  className='edit-decoration'>
                      
                       
                      <Typography sx={{
                        color:'black'
                      }}>
                      {footData.text}
                      </Typography>
                   
                    
                  </a>
                    </Typography>
                ))
            }
        </Typography>
    </Typography>
   </Typography>
  
}
