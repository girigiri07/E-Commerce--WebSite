
import { 
    Typography,
    Stack,
ImageList,
ImageListItem,
ImageListItemBar,
IconButton,
Button,
Icon


 } from '@mui/material';
 import { Link } from 'react-router-dom';
 import '../PageStyle/MainStyle.scss'
import React from 'react'
import { hover } from '@testing-library/user-event/dist/hover';
const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
imgUrl: 'images/category/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: 'images/category/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
imgUrl: 'images/category/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Photography',
},
{
imgUrl: 'images/category/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Formal Dress',
},
{
imgUrl: 'images/category/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Colorful Bags',
},
{
imgUrl: 'images/category/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Home Decor',
},
]
export const HomeCategory = () => {
  return  <Typography className='category-section style-4 ' sx={{
    marginTop:'20px',
    marginBottom:'20px'
  }} >
    <Typography className='container'>
   <Typography className='section-header' sx={{
    textAlign:'center'
   }}>
     <Typography variant='h5'className='subTitle' 
    sx={{
            color:'yellow'}}
            >
                {subTitle}
            </Typography>
            <Typography variant='h3' className='title'>
                {title}
            </Typography>
   </Typography>

   {/* <Typography className='edit-size' > */}
   <Typography className='section-wrapper'

    // sx={{
    //             display:'grid',
    //             gridTemplateColumns:'1fr 1fr 1fr',
    //            columnGap:'5px',
    //            justifyContent:'center'
    //         }}
            >
           
            <ImageList 
             sx={{
            //  display:'flex',
            //  flexDirection:'column',
           
           
                // gridTemplateColumns:'1fr 1fr 1fr',
             
            }}
            cols={3}
          
            >
                 {
                     categoryList.map((item , index)=>(
                        <ImageListItem key={index} className='col' sx={{
                                display:'flex',
            //  flexDirection:'column',
             alignItems:'center',
             justifyContent:'center',
           
                        }} >
                         <Link to="/shop" className='category-item'>
                        
                           <Typography className='category-inner' >
                           <Typography className='category-thumb' 
                         
                            >
                           <img className='image-adjust' src={item.imgUrl} alt=""/>
                           </Typography>

                           <Typography className='category-content'>
                            {/* <Typography className="cate-icon">
                            </Typography> */}
                            <Link to="/shop">
                           <ImageListItemBar className='color-change' title={
                             <Typography variant='body2' sx={{
                                fontWeight:'bold',
                                color:'black'
                            }} >
                            {item.title}
                        </Typography>
                           } position='bottom' sx={{
                           
                            position:'absolute',
                            bottom:0,
                            left:0,
                            right:0,
                            // background:'rgba(0,0,0,0.6)',
                          
                            background:'none',
                          fontWeight:'bold',
                           color:'black',
                            textAlign:'center',
                         
                           }} />
                           </Link>
                          
                          </Typography>
                           </Typography>
                         

                          
                          
                          
                           
                         
                          </Link>
                         </ImageListItem>
                        
                        
                     ))
                 }
             </ImageList>
            </Typography>
            
           
        
 {/* </Typography> */}


    </Typography>
        {/* <Typography variant='h5' sx={{
            color:'yellow'}}>
                {subTitle}
            </Typography>
            <Typography variant='h3'>
                {title}
            </Typography> */}
          
        
       <Typography sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            textDecoration:'none',
           
         }}>
             <Link to={"/shop"} >
        <Button variant='outlined' className='lab-btn' sx={{
            textDecoration:'none',
            color:'black',
            background: 'transparent',
            border: '2px solid #ffdf40',
            fontWeight:'bold',
           " &:hover":{
            backgroundColor:'#ffdf40',
            boxShadow:'0  5px  10px'
           
           }
    
        }}>
            {btnText}
        </Button>
        </Link>
       </Typography>
        
    
    </Typography>
  
}
