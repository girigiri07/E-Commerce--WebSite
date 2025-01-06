import { Icon, Typography, Grid , Button} from '@mui/material';
import React from 'react'
import CountUp from 'react-countup';
import { Link } from 'react-router-dom'
import '../PageStyle/MainStyle.scss'
import PersonIcon from '@mui/icons-material/Person'
import SchoolIcon from '@mui/icons-material/School'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard'

const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn  all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
{
iconName: <PersonIcon />, color:"red",
count: '12600',
text: 'Marchant Enrolled',
},
{
iconName: <SchoolIcon /> , color:"green",
count: '30',
text: 'Certified Courses',
},
{
iconName: <CardGiftcardIcon /> , color:"yellow",
count: '100',
text: 'Rewards and GitCards',
},
]
export const AboutUs = () => {
  return <Typography className='instructor-section style-2 ' sx={{
    // position:'relative',
    marginTop:'250px',
    background:'linear-gradient(to right , #000000 50% ,  #ffd700 50%), radial-gradient(circle at 20% center, rgba(0,0,0,0.8), transparent 70%) '
    
  }}>
<Typography className='container'>
<Typography className='section-wrapper'>
      <Grid
      container
      spacing={4}
      alignItems='center'
      justifyContent='center'
      sx={{
        flexDirection:'column'
      }}
      >
        <Typography  sx={{
            display:'flex',
        //    justifyContent:"space-",
        //     gap:'50px'
        }}>
     <Typography sx={{
        position:'relative',
        right:'200px',
        top:'200px',
            bottom:'100px',
           
     }}>
     {
            countList.map((data , index)=>(
                <Typography key={index}  sx={{
                    display:'flex',
                  flexDirection:'column',
                  

                    // alignItems:'center',
                    // justifyContent:'center',
                }}>
                    <Typography sx={{
                          display:'flex',
                        //   flexDirection:'column',
                        gap:'20px',
                        //   alignItems:'center',
                        //   justifyContent:'center',
                    }} >
                    <Icon className='count-icon' sx={{
                        background:data.color,
                        borderRadius:'50%',
                        width:50,
                        height:50,
                        display:'flex',
                        flexDirection:'column',
                        alignItems:'center',
                        justifyContent:'center',
                        marginBottom:'20px',
                        color:'#fff',
                        transition:"background-color 0.3s ease" , "&:hover":{
                            backgroundColor:'black',
                            // backgroundColor:'#ffdf40',
        boxShadow:'0  5px  10px'
                        }
                    }}>
                        {data.iconName}
                    </Icon>
                    <Typography sx={{
                            display:'flex',
                            flexDirection:'column'
                          }}
                          >
                             <Typography sx={{
                            display:'flex',
                            gap:'5px'
                           }}
                           >
                             <Typography variant='h4' className='count' sx={{
                                color:'white'
                            }}> 
                            <CountUp end={data.count} />
                            </Typography>
                            <Typography sx={{
                                position:'relative',
                                color:'white',
                                top:'10px'
                            }}>
                                +
                            </Typography>
                           </Typography>
                            <Typography sx={{
                                color:'white'
                            }}>
                            {data.text}
                            </Typography>
                          </Typography>
                    </Typography>
                
                    

                </Typography>
            ))
        }
     </Typography>
          <Typography className='instructor-content' sx={{
            display:'flex',
            flexDirection:'column',
            position:'relative',
            top:'200px',
            bottom:'100px',
            left:'300px',
            justifyContent:'center',
            alignItems:'center',
            

            // alignItems:'flex-end'
          }}>
        <Typography className='subtitle' sx={{
            textAlign:'left',
            marginBottom:'10px'
        }}>
            {subTitle}
        </Typography>
        <Typography variant='h3' sx={{
            textAlign:'left',
            color:'black',
            fontWeight:'bold',
            marginBottom:'10px'
        }}>
            {title}
        </Typography>
        <Typography sx={{
            textAlign:'left',
            color:'black'
        }}>
            Take courses on your any device with our app & learn
        </Typography>
        <Typography sx={{
            textAlign:'left',
            color:'black'
        }}>
          all about business what you want. Just download &
        </Typography>
        <Typography sx={{
            textAlign:'left',
            color:'black',
            marginBottom:'10px'
        }}>
          install & start to learn
        </Typography>
        <Typography sx={{
            textAlign:'left',
          
        }}>
            <Link to="/sign-up" className='edit-decoration'>
               <Button sx={{
  backgroundColor:'white',
  color:'black'
               }}>
               {btnText}
               </Button>
            </Link>
        </Typography>
    </Typography>
        </Typography>
      
       
    <Typography sx={{
        position:"relative",
        bottom:'110px'
    }}>
    <img src='images/instructor/01.png' alt='' />
</Typography>
      </Grid>
    </Typography>
</Typography>

   



   </Typography>
  
}
