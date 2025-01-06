import { Grid, ListItem, ListItemIcon, Typography  ,Badge , Paper} from '@mui/material'
import React from 'react'
// import {PersonIcon} from '@mui/icons-material/Person'
// import { CalendarTodayIcon } from '@mui/icons-material/CalendarToday'
import { PageHeader } from '../Componets/PageHeader'
import blogList from '../utils/dumpyblogdata/blogdata'
import { Link } from 'react-router-dom'
import { List } from '@mui/icons-material' 
import MessageIcon from '@mui/icons-material/Message'
// const metaList = [
//   {
//     iconName: <PersonIcon />,
//     text: 'Rajib Raj',
// },
// {
//     iconName: <CalendarTodayIcon />,
//     text: 'Jun 05,2022',
// },
// ]
  

export const BlogPage = () => {
  return <Typography>
      <Typography sx={{
        marginBottom:'50px'
      }}>
        <PageHeader title="Blog Page" curPage="Blog" />
    </Typography>

<Typography   >
 <Typography sx={{
      display:'grid',
      gridTemplateColumns:'repeat(3,1fr)'
    }}>
      {
        blogList.map((blog , index) => (
          <Typography key={index} component={Paper} sx={{
            padding:'10px',
            margin:'10px'
          }} >

                <Typography>
                  <Link to={`/blog/${blog.id}`}>
                    <img src={blog.imgUrl} alt='' />
                  </Link>
                  </Typography>

                  <Typography sx={{
                    marginBottom:'15px',
                    marginTop:'15px'
                  }}>
                  <Link to={`/blog/${blog.id}`} style={{
                    textDecoration:'none',
                    color:'black',
                    fontWeight:'bold',
                    
                  }} >
                   {blog.title}
                  </Link>
                  </Typography>

                  {/* <Typography>
                    {
                    blog.metaList.map((vol , ind) => (
                        <List>
                          <ListItem key={ind}>
                          <Typography>
                         <img src={vol.iconName} alt="" />
                         </Typography>
                            {vol.text}
                          </ListItem>
                        </List>
                      ))
                    }
                    </Typography> */}
      <Typography sx={{
                 
                    color:'#555555',
                    marginBottom:'15px'
                    
                  }} >
 {blog.desc}
        </Typography>


        <Typography sx={{
          display:'flex',
          // justifyContent:'space-between'
          gap:33
        }}>
          
          <Typography>
                  <Link to={`/blog/${blog.id}`} style={{
                    textDecoration:'none',
                    color:'black',
                    
                  }} >
                   {blog.btnText}
                  </Link>
</Typography>


                        <Typography>
                         <Badge badgeContent={blog.commentCount} color='primary'>


<MessageIcon />
                         </Badge>
                         
                          </Typography>
          </Typography>

</Typography>


        ))
      }
    </Typography>
    </Typography>
   
    
  
  </Typography>
  
}
