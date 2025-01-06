import React, { useState } from 'react'
import blogList from '../utils/dumpyblogdata/blogdata'
import { useParams } from 'react-router-dom'
import { PageHeader } from '../Componets/PageHeader'
import { 
    Typography,
    List,
    ListItem,
    ListItemIcon,
    Box,
    Paper

 } from '@mui/material'
import { PopularTags } from '../Shop/PopularTags'
import { PopularPost } from '../Shop/PopularPost'
import InstagramIcon from '@mui/icons-material/Instagram'
import FaceBookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import PinterestIcon from '@mui/icons-material/Pinterest'
//  const socialList = [
//     {
//     link: "#",
//     iconName: "icofont-facebook",
//     className: "facebook",
//     },
//     {
//     link: "#",
//     iconName: "icofont-twitter",
//     className: "twitter",
//     },
//     {
//     link: "#",
//     iconName: "icofont-linkedin",
//     className: "linkedin",
//     },
//     {
//     link: "#",
//     iconName: "icofont-instagram",
//     className: "instagram",
//     },
//     {
//     link: "#",
//     iconName: "icofont-pinterest",
//     className: "pinterest",
//     },
//     ];


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
export const SingleBlog = () => {

    const [blog , setBlog] = useState(blogList)
    const {id} = useParams()

    const result = blog.filter((b) => b.id === Number(id))

  return <Typography>

    <Typography sx={{
        marginBottom:'50px'
    }}>
    <PageHeader title={"Single Blog Page "} curPage={"Blog / Blog Details"} />
    </Typography>


<Typography sx={{
    display:'flex'
}}>
 
 <Typography component={Paper} sx={{
    // display:'flex'
    padding:'10px',
    margin:'10px',
    marginTop:'10px'
 }}>

 <Typography>
     {
         result.map((item) => (
             <Typography key={item.id}>
                    <Typography >
                        <Box sx={{
    width:900,
    Height:300,
    overflow:'hidden',
    marginLeft:'15px'
 
   }}>
                        <img style={
                        {
                          width:'100%',
                          height:'100%',
                          objectFit:'cover'
                        }
                      } src={item.imgUrl} alt='' />
                        </Box>
                 
                     </Typography>

                 <Typography variant='h3' sx={{
                    color:'black',
                    fontWeight:'bold',
                    marginBottom:'10px'
                 }}>

                     {item.title}

                 </Typography>
                 
                 <Typography sx={{
                    display:'flex',
                    gap:2
                   }} >
             {
               item.metaList.map((vol , ind) => (
                 <List sx={{
                    display:'flex',
                    gap:2
                   }} >
                   <ListItem key={ind} >
                 <Typography sx={{
                    display:'flex',
                    gap:2,
                    marginBottom:'15px'
                   }} >
                 <Typography>
                    <Box sx={{
    width:50,
    Height:40,
    overflow:'hidden',
   
 
   }}>
                    <img  
                    style={
                        {
                          width:'100%',
                          height:'100%',
                          objectFit:'cover'
                        }
                      }
                    src={vol.iconName} alt="" />
                    </Box>
                  
                  </Typography >



                    <Typography sx={{
                        color:'#555555',
                        // marginBottom:'10px',
                        position:'relative',
                        top:'5px'
                    }}>
                    {vol.text}
                    </Typography>
                 </Typography>
                   </ListItem>
                 </List>
               ))
             }
             </Typography>


<Typography variant='body1' sx={{
                        color:'#555555',
                        marginBottom:'15px'
                    }}>
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performePluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
</Typography>


<Typography sx={{
    backgroundColor:'darkorange',
    marginBottom:'15px'
}}>
<Typography variant='body1' sx={{
                        color:'white',
                        fontWeight:'bold',
                            padding:'10px',
                        marginBottom:'10px'
                    }}>
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performePluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
</Typography>



                 <Typography sx={{
                    display:'flex',
                    justifyContent:'end',
                    marginRight:'10px'
                 }}>
                 <a href='#'  style={{
                        color:'white',
                        fontWeight:'bold',
                        textDecoration:'none',
                        marginBottom:'10px',
                        textAlign:'right',
                        padding:'10px'
                    }} >
                     ...Mulisse Hunter
                 </a>
                     </Typography>
    </Typography>

             <Typography >


             <Typography variant='body1' sx={{
                        color:'#555555',
                        fontWeight:'bold',

                        marginBottom:'10px'
                    }}>
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performePluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
</Typography>

<Box sx={{
    width:900,
    Height:40,
    overflow:'hidden',
    marginLeft:'15px'
 
   }}>
        <img style={
                        {
                          width:'100%',
                          height:'100%',
                          objectFit:'cover'
                        }
                      } src='/images/blog/single/01.jpg' alt='' />
    </Box>




<Typography variant='body1' sx={{
                         color:'#555555',
                        fontWeight:'bold',

                        marginBottom:'10px'
                    }}>
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performePluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
</Typography>
<Box sx={{
    width:900,
    Height:40,
    overflow:'hidden',
    marginLeft:'15px'
 
   }}>
<img  style={
                        {
                          width:'100%',
                          height:'100%',
                          objectFit:'cover'
                        }
                      }  src='/images/blog/single/02.jpg' alt='' />

   </Box>

<Typography variant='body1' sx={{
                       color:'#555555',
                        fontWeight:'bold',

                        marginBottom:'10px'
                    }}>
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performePluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe
</Typography>

<List sx={{
    display:'flex'
}}>
 <ListItem>
     <a href='#' style={{
        textDecoration:'none',
        color:'#555555',
        margin:'10px'
     }}>
         Agency
     </a>
 </ListItem>
 <ListItem>
     <a href='#' style={{
        textDecoration:'none',
        color:'#555555',
        margin:'10px'
     }}>
         Business
     </a>
 </ListItem>
 <ListItem>
     <a href='#' style={{
        textDecoration:'none',
        color:'#555555',
        margin:'10px'
     }}>
         Personal
     </a>
 </ListItem>
</List>



                 </Typography>



                 </Typography>


         ))
     }
 </Typography>

<Typography sx={{
    display:'flex',
    gap:2
}}>
{
socialList.map((data,index) => (
 <List>
<ListItem key={index}>
            <Box sx={{
                 width:50,
                 Height:50,
                 borderRadius:'50%',
                 overflow:'hidden',
                //  backgroundColor:data.color,
                
            }}>
            <a href='#'  style={{
                textDecoration:'none',
                width:'100%',
                          height:'100%',
                          objectFit:'cover',
                        //   display:'flex',
                        //   justifyContent:'center',
                        //   alignItems:'center'
                
             }} >
                 {data.iconName}
             </a>
            </Box>
         </ListItem>
     </List>
))
}
</Typography>


<Typography sx={{
    display:'flex',
    justifyContent:'space-around',
    marginBottom:'10px',
    
}}>
<a href='#' style={{
    textDecoration:'none',
    color:'black',
    fontWeight:'bold',
 
}}>

 Previous Blog
</a>
<a href='#'style={{
    textDecoration:'none',
    color:'black',
    fontWeight:'bold'
}}>

 Previous Blog
</a>
</Typography>
<Typography sx={{
    display:'flex',
    justifyContent:'space-around'
}}>

<a href='#'style={{
    textDecoration:'none',
    color:'#555555'
}}>

Evaaculate Parellel Processess technica sound Models Authoriactive
</a>
<a href='#'style={{
    textDecoration:'none',
    color:'#555555'
}}>

Evaaculate Parellel Processess technica sound Models Authoriactive
</a>
</Typography>

 </Typography>

<Typography>
<PopularTags />
<PopularPost />
</Typography>
 


</Typography>


  </Typography>
 

}
