import { 
  Typography,
  Box,
  IconButton,
  Paper

  
 } from '@mui/material'
 import { ArrowBack , ArrowForward } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import {Swiper , SwiperSlide} from "swiper/react"
// import "swiper/css"
// import {autoplay} from "swiper/modules"
import { PageHeader } from '../Componets/PageHeader'
import productData from "../products.json"
import { ProductDisplay } from './ProductDisplay'
import { PopularPost } from './PopularPost'
import { PopularTags } from './PopularTags'
import { ReviewPage } from './ReviewPage'

export const SingleProduct = () => {
    const [product , setProducts] = useState(productData)
    const {id} = useParams()
    console.log(id)
    // useEffect(()=>{
    //   fetch("/src/products.json").then(res => res.json()).then(data => setProducts(data))
    // }, [])
console.log(product)
    const result = product.filter((p) => p.id === id )
    console.log(result)
  return <Typography>
    
    <Typography>
     <PageHeader title="Our Shop Page" curPage="Shop / Single Product" />
     </Typography>



     <Typography sx={{
      display:'flex',
      // width:'500px',
      // height:'500px'
     }}>

     <Typography  sx={{
         width:'500px',
      height:'500px',
      position:'relative',
        top:'200px',
       

     }} >
     <Typography>
{/* <Typography>
  <Swiper>
    <SwiperSlide>
      Slide 1 
    </SwiperSlide>
    <SwiperSlide>
      Slide 2
    </SwiperSlide>
    <SwiperSlide>
      Slide 3
    </SwiperSlide>
    <SwiperSlide>
      Slide 4
    </SwiperSlide>
    <SwiperSlide>
      Slide 5 
    </SwiperSlide>
    <SwiperSlide>
      Slide 6 
    </SwiperSlide>
    <SwiperSlide>
      Slide 7 
    </SwiperSlide>
    <SwiperSlide>
      Slide 8 
    </SwiperSlide>
    <SwiperSlide>
      Slide 9 
    </SwiperSlide>
  </Swiper>
</Typography> */}

{
  result.map((item , index)=>(
   <Box key={index} sx={{
    width:350,
    Height:40,
    overflow:'hidden',
    position:'relative',
    left:"10px"
   }}>
<img style={
  {
    width:'100%',
    height:'100%',
    objectFit:'cover'
  }
} src={item.img} alt=''/>

    </Box>
  ))
}
      </Typography>

     <Typography sx={{
      display:'flex',
      gap:35,
      marginTop:'10px'
     }}>
     <Typography>
      <IconButton sx={{
        color:'white',
        backgroundColor:'orange',
        postion:'relative',
        left:'5px',
        "&:hover":{
          backgroundColor:'black'
        }
      }}
      >
        <ArrowBack  />
      </IconButton>
      </Typography>
      <Typography>
      <IconButton  sx={{
        color:'white',
        backgroundColor:'orange',
        "&:hover":{
          backgroundColor:'black'
        }
      }}>
       <ArrowForward />
      </IconButton>
      </Typography>
     </Typography>
     </Typography>

     <Typography>
     <Typography>

{
result.map(item => < ProductDisplay key={item.id} item={item} />)
}
</Typography>

     </Typography>


<Typography>
       <Typography sx={{

       }}>
            <PopularPost />
          </Typography>
          <Typography>
            <PopularTags />
          </Typography>
       </Typography>

     </Typography>

     <Typography sx={{
      // postion:'relative',
      // bottom:'100px'
     }} >
      <ReviewPage />
     </Typography>
   </Typography>
  
}
