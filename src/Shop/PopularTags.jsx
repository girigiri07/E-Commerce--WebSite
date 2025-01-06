import { ListItem, Typography ,List, Paper ,Grid} from '@mui/material';
import React from 'react'
const title = "Our Popular Tags";

const tagsList = [ { link: "#", text: "envato", }, { link: "#", text: "themeforest", }, { link: "#", text: "codecanyon", }, { link: "#", text: "videohive", }, { link: "#", text: "audiojungle", }, { link: "#", text: "3docean", }, { link: "#", text: "envato", }, { link: "#", text: "themeforest", }, { link: "#", text: "codecanyon", }, ];

export const PopularTags = () => {
  return  <Typography component={Paper} sx={{
    
    margin:'10px',
    marginTop:'30px',
    // marginRight:'50px',
  }}>
    <Typography variant='h4' sx={{
        color:'black',
        fontWeight:'bold',
        padding:'10px'
    }}>
        {title}
    </Typography>
    <Typography sx={{
     
    }}>
    <List sx={{
         display:'grid',
         gridTemplateColumns:'repeat(3,1fr) ',
    }}>
    {
            tagsList.map((tag,index)=>(
                <ListItem key={index} sx={{
                    
                }}>
                    <a style={{ 
                        textDecoration:'none',
                        color:'#555555'
                    }} href={tag.link}>
                        {tag.text}
                    </a>

                </ListItem>
            ))
        }
    </List>
    </Typography>
   </Typography>
  
}
