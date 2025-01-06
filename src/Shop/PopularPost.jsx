import { ListItem,
     Typography ,
     List,
     Box,
     Paper
    } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
const title = "Most Popular Post"
const postList = [ { 
    id:1, imgUrl: '/blog/10.jpg', imgAlt: 'rajibraj91', title: 'Poor People Campaign Our Resources', date: 'Jun 05,2022', }, 
    { id:2, imgUrl: 'images/blog/11.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, 
    { id:3, imgUrl: 'images/blog/12.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, 
    { id:4, imgUrl: 'images/blog/09.jpg', imgAlt: 'rajibraj91', title: 'Poor Peoples Campaign Our Resources', date: 'Jun 05,2022', }, ]
export const PopularPost = () => {
  return  <Typography component={Paper} sx={{
  
    margin:'10px',
    marginTop:'30px',
    // marginRight:'50px',
  }}>
    <Typography variant='h4' sx={{
        marginBottom:'10px',
        color:'black',
        fontWeight:'bold',
        padding:'10px'
    }}>
        {title}
    </Typography>
    <Typography>
      <List>
      {
            postList.map((post , index)=>(
                <>
               <Typography sx={{
                display:"flex",
                marginBottom:'15px',
                gap:2
               }}>
               <ListItem key={index}>
                <Box sx={{
            width:150,
            Height:150,
            overflow:'hidden'
           }}>
             <Link to={`/blog/${post.id}`}>
           <img  style={{
            width:'100%',
            height:'100%',
            objectFit:'cover'
           }} 
            src={post.imgUrl} alt='' />
            </Link>
           </Box>
                   
                        
                    
                </ListItem>
                <ListItem sx={{
                    display:'flex',
                    flexDirection:'column',
                    position:'relative',
                    right:'40px'
                }}>
                <Link to={`/blog/${post.id}`} style={{
                    textDecoration:'none',
                   
                }}>
                        <Typography  sx={{
                            color:'black',
                            
                            
                        }}>
                        {post.title} 
                        </Typography>
                    </Link>
                    <Typography sx={{
                        color:'#555555',
                        textAlign:'left',
                        margintop:"15px",
                        position:'relative',
                    right:'50px',
                    // left:'1px',
                    top:'2px'
                    }}>
                        {post.date}
                    </Typography>
                    </ListItem>
               </Typography>
                    </>
            ))
        }
      </List>
    </Typography>
   </Typography>
  
}
