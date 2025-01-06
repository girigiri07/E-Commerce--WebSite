import { AppBar, Button, ImageList, ImageListItem, ImageListItemBar, Stack, Toolbar, Typography , Paper } from '@mui/material';
import React, { useState } from 'react'
import { Ratings } from '../Componets/Ratings';
import { Link } from 'react-router-dom';
import "../PageStyle/MainStyle.scss";
const title = "Our Products";

const ProductData = [
{
imgUrl: 'images/categoryTab/01.jpg',
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '$199.00',
id: 1,
},
{
imgUrl: 'images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$199.00',
id: 2,
},
{
imgUrl: 'images/categoryTab/03.jpg',
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '$199.00',
id: 3,
},
{
imgUrl: 'images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '$199.00',
id: 4,
},
{
imgUrl: 'images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '$199.00',
id: 5,
},
{
imgUrl: 'images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: 'images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '$199.00',
id: 7,
},
{
imgUrl: 'images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '$199.00',
id: 8,
},
]
// const imagepic = 'images/shape-img/icon/01.png'
// const imagedata = 'images/shape-img/icon/02.png'
// const data = [
//     {
//         imgdata : 'images/shape-img/icon/01.png'
//     },
//     {
//         imgdata : 'images/shape-img/icon/02.png'
//     }
// ]

export const CategoryShowCase = () => {
    const [items , setItems] = useState(ProductData);

    const handleFilterItems =(categoryItemName)=>{
        const updateItems = ProductData.filter((category)=>{
            return category.cate === categoryItemName
    })
    setItems(updateItems)
    }
  return <Typography className='course-section style-3 ' sx={{
    marginBottom:'30px'
  }} >
    {/* {
        data.map((image)=>(
            <><Typography className='course-shape-one'>
                <img src={image.imgdata} alt='no image' />
            </Typography><Typography className='course-shape-two'>
                    <img src={image.imgdata} alt='no image' />
                </Typography></>
        ))
    } */}
   {/* <Typography className='course-shape-one' >
<img src={imagepic}  alt='no image' />
   </Typography>
   <Typography className='course-shape-two' >
<img src={imagdata}alt='no image' />
   </Typography> */}

   
        <Toolbar className='container' sx={{
           marginBottom:'20px'
           }}>
       <Typography className='section-header' sx={{
            display:'flex',
            flexGrow:'1',
            justifyContent:'space-between'
          
           }}>
       <Typography className='title' variant='h3' sx={{
        textAlign:'left'
       }}>
    OUR PRODUCTS
   </Typography>
           <Typography className='course-filter-group' sx={{
            display:'flex'
           }}>
            <Typography className='lab-ul'>
            <Button onClick={()=>setItems(ProductData)} sx={{
                backgroundColor:'transparent',
                "&:hover":{
                    backgroundColor:'#ffdf40'
                }
            }}>
                All
            </Button>
            <Button onClick={()=>handleFilterItems("Shoes")} sx={{
                backgroundColor:'transparent',
                "&:hover":{
                    backgroundColor:'#ffdf40'
                }
            }}>
                Shoes
            </Button>
            <Button onClick={()=>handleFilterItems("Bags")} sx={{
                backgroundColor:'transparent',
                "&:hover":{
                    backgroundColor:'#ffdf40'
                }
            }}>
                Bags
            </Button>
            <Button onClick={()=>handleFilterItems("Phones")} sx={{
                backgroundColor:'transparent',
                "&:hover":{
                    backgroundColor:'#ffdf40'
                }
            }}>
                Phones
            </Button>
            <Button onClick={()=>handleFilterItems("Beauty")} sx={{
                backgroundColor:'transparent',
                "&:hover":{
                    backgroundColor:'#ffdf40'
                }
            }}>
            Beauty
            </Button>
            </Typography>
           </Typography>
       </Typography>

        </Toolbar>

      {/* <Paper elevation={3}> */}
      <Typography className='section-wrapper' sx={{
        margin:'20px',
        // position:'absolute',
        // top:'50%',
        // left:'50%',
        // transform:'translate(-50%,-50%)'
          
                        //  display:'flex',
                        //  flexDirection:'column',
                        //  justifyContent:'center',
                        //  alignItems:'center'
            
        
      }}>
      <Typography  sx={{
        display:"grid",
        gridTemplateColumns:"repeat(4,1fr)",
        gap:2,
        justifyContent:'center',
        alignItems:'center'
       }}>
    
            {
                items.map((product) =>(
                  
                
                     <Typography component={Paper} className='course-item style-4' key={product.id} 
                    // sx={{
                    //     display:'flex',
                    //     flexDirection:'column',
                    //     justifyContent:'center',
                    //     alignItems:'center'
                    // }}
                    >

                        <Typography className='course-inner'>
                        <ImageList >
                            <ImageListItem className='course-thumb' sx={{
                                width:'300px'
                            }} >
                               <img src={product.imgUrl} alt=""/>
                           
                            <ImageListItemBar className='course-category' sx={{
                                display:'flex',
                                justifyContent:'space-between',
                                padding:'0 16px',
                                backgroundColor:'#ffdf40',
                                textDecoration:'none'
                               
                            }}
                            title={
                                <a href='#' className='edit-decoration'>
                                    <Typography variant='body2' className='course-cate' sx={{
                                        fontWeight:'bold',
                                        color:'black',
                                        textDecoration:'none'
                                    }} >
                                    {product.cate}
                                </Typography>
                                </a>
                            }
                            actionIcon={
                                <Typography variant='body2' className='course-review' sx={{
                                    fontWeight:'bold',
                                    color:'inherit',
                                    marginRight:'16px'
                                }}>
                                <Ratings />
                            </Typography>
                            }

                            />
                           
                           </ImageListItem>
                         
                         </ImageList>
                         <Typography >
                         
                         <Link to={`/shop/${product.id}`} className='edit-decoration' >
                         <Typography variant='h5' className='course-content' sx={{
                           color:'black',
                           fontWeight:'bold',
                           padding:'10px'
                        }} >
                           {product.title}
                           </Typography>
                           </Link>
                        

                        <Typography className='course-footer' sx={{
                           display:'flex',
                           justifyContent:'space-between',
                           // marginBottom:'5px'
                        }}>
                      
                               <Link to="/" className='edit-decoration'>
                               <Typography sx={{
                           color:'black',
                           padding:'10px',
                           position:'relative',
                           bottom:'10px'
                        
                          
                        }} className='course-author' >
                               {product.brand}
                               </Typography>
                               </Link>
                         
                           <Typography className='course-price' sx={{
                               color:'#ffdf40',
                               marginRight:'10px'
                              
                           }}>
                               {product.price}
                           </Typography>
                           </Typography>

                       </Typography>
                            </Typography>
                       

                           


                       

                    </Typography>
                    
                ))
            }
      
       </Typography>
      </Typography>
      
      {/* </Paper> */}
  
   </Typography>
  
}
