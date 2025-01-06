import React from 'react'
import { 
    ImageList,
    List,
    Typography,
    Box
   

 } from '@mui/material'
import { PageHeader } from '../Componets/PageHeader';
import zIndex from '@mui/material/styles/zIndex';

const aboutList = [
    {
    imgUrl: '/images/about/icon/01.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Skilled Instructors',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
    imgUrl: '/images/about/icon/02.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Get Certificate',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    {
    imgUrl: '/images/about/icon/03.jpg',
    imgAlt: 'about icon rajibraj91 rajibraj',
    title: 'Online Classes',
    desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
    },
    ]
    const year = "30+";
    const expareance = "Years Of Experiences";
    const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

export const AboutPage = () => {
  return <Typography sx={{
    backgroundColor:'#fdf4e9',
    marginTop:'50px'
  }}>

    <Typography sx={{
        //  marginBottom:'50px'
    }}>
           <PageHeader title="About Our Brand" curPage="About"/>
        </Typography>


<Typography sx={{
    display:'flex',
    justifyContent:'space-around',
    gap:2
}}>
    
<Typography>
    {/* <Box sx={{
     position:'relative',
     width:'80%',
     height:'300px',
     display:'flex',
    //  justifyContent:'center',
     alignItems:'end'
    }}>

        <Box 
        
        sx={{
            position:'absolute',
            width:'50%',
            height:'80%',
            zIndex:1,
        }}>

<Typography>
            <img src='images/about/02.jpg' alt='' />
        </Typography>

        </Box>
        </Box>
      
      
        <Typography variant='h3'>
            {year}
        </Typography>
        <Typography variant='body1'>
            {expareance}
        </Typography> */}


  <Typography sx={{
    marginLeft:'50px'
  }}>
    <Box sx={{
        width:500,
        // height:100,
        overflow:'hidden'
    }} >
        
    </Box>
            <img style={{
                width:'100%',
                height:'100%',
                objectFit:'cover'
            }} src='images/about/01.jpg' alt='' />
        </Typography>
       </Typography>



        <Typography>


       <Typography>
       <Typography sx={{
        color:'orangered',
        marginBottom:'10px',
        marginTop:'10px'

       }}>
            {subTitle}
        </Typography>
        <Typography variant='h3' sx={{
            marginBottom:'10px',

        }}>
            {title}
        </Typography>
        <Typography variant='body1'  sx={{
            marginBottom:'15px',
            color:"#555555"
            
        }}>
            {desc}
        </Typography>
        </Typography>

        <Typography>
            {
                aboutList.map((data , index)=>(
                    <List>
                       <Typography sx={{
                        display:'flex',
                        // gap:2
                       }}>
                       <Typography>
                        <ImageList key={index}>
                            <img src={data.imgUrl} alt='' />
                        </ImageList>
                        </Typography>

                        <Typography>
                        <Typography variant='h5' sx={{
                            fontWeight:'bold'
                        }}>
                            {data.title}
                        </Typography>
                        <Typography variant='body'  sx={{
                           color:'#555555'
                        }}>
                            {data.desc}
                        </Typography>
                        </Typography>
                       </Typography>
                    </List>
                ))
            }
        </Typography>
       </Typography>
</Typography>

        </Typography>
  
}
