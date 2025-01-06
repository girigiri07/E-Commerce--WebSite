import { 
    
    Typography ,
    Icon,
    ImageList,
    Divider,
    ListItem,
    List,
    Button,
    ImageListItem,
    Box,
    ImageListItemBar

} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Ratings } from '../Componets/Ratings'
import { useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DirectionRunIcon from '@mui/icons-material/DirectionsRun'
export const ProductsCards = ({GridList , Products}) => {
    
    console.log(Products)
    const [currentPage , setCurrentPage] = useState(1);
    const recordPerPage = 12;
    const lastIndex = currentPage * recordPerPage;
    const firstindex = lastIndex - recordPerPage;
    const productData = Products.slice(firstindex , lastIndex);
    const totalNumOfPage = Math.ceil(Products.length/recordPerPage);
    const num = [...Array(totalNumOfPage + 1).keys()].slice(1)

    const handlePrevious = () =>{
        if(currentPage !== 1) {
            setCurrentPage(currentPage -1)
        }
    }

    const handleChangePage = (id) =>{
        setCurrentPage(id)
    }
    const handleNext = () =>{
        if(currentPage !== totalNumOfPage){
            setCurrentPage(currentPage + 1)
        }
    }
  return (
   <Typography >
    <Typography sx={{
                        display:'grid',
                        gridTemplateColumns:'repeat(3,1fr)',
                        
                       
                    }}>
        {
            productData.map((product  , index)=>(
                <Typography key={index}>
                <ImageList sx={{
                    display:'flex',
                    justifyContent:'center'
                }}>
                    <ImageListItem sx={{
                       
                        width:'200px',
                        height:'200px'
                    }}>
                    <img src={product.img} alt=''  />
                 
                    </ImageListItem>
                </ImageList>

                <Box sx={{
    // position:'absolute',
    // top:0,
    // left:0,
   
    justifyContent:'center',
    alignItems:'center',
    // gap:2,
    // opacity:0,
    // transition:"opacity 0.3s ease-in-out",
    // backgroundColor:'rgba(0,0,0,0.4)'
}}>
<Typography sx={{
    display:'flex',
    gap:2,
    justifyContent:'center',
    marginBottom:'10px'
}}>
    <Link to={`/shop/${product.id}`}>
        <Icon sx={{
            borderRadius:'50%',
            width:30,
            height:30,
             display:'flex',
             justifyContent:'center',
             alignItems:'center',
             transition:"transform 0.3s",
            bgcolor:'orange',
            "&:hover":{
                bgcolor:'darkorange'
            },
            color:'white'
        }}
        >
          <DirectionRunIcon />
        </Icon>
    
    </Link>
    <a href='#'>
        <Icon  sx={{
            borderRadius:'50%',
            width:30,
            height:30,
             display:'flex',
             justifyContent:'center',
             alignItems:'center',
             transition:"transform 0.3s",
            bgcolor:'orange',
            "&:hover":{
                bgcolor:'darkorange'
            },
            color:'white'
        }}
        >
            <FavoriteIcon />
        </Icon>
    </a>
    <Link to={"/cart-page"}>
        <Icon sx={{
            borderRadius:'50%',
             width:30,
             height:30,
             display:'flex',
             justifyContent:'center',
             alignItems:'center',
             transition:"transform 0.3s",
            bgcolor:'orange',
            "&:hover":{
                bgcolor:'darkorange'
            },
            color:'white'
        }}
        >
            <ShoppingCartIcon />
        </Icon>
    
    </Link>
    </Typography>
</Box>
                       
<Typography>
    


<Link to={`/shop/${product.id}`} className='edit-decoration'>
<Typography variant='h5' sx={{
    color:'black',
    textAlign:'center'
}}>
{product.name}
</Typography>
</Link>


                    <Typography sx={{
                        textAlign:'center'
                    }}>
                <Ratings />
                        </Typography>

<Typography variant='h4' sx={{
    textAlign:'center',

}}>

    {product.price}
    </Typography>


    </Typography>


                    </Typography>
            ))
        }
    </Typography>
    <Typography>
                           
                           <List sx={
                             {
                             display:'flex'
                             }
                           }>
                             <ListItem>
                             <Button onClick={handlePrevious} sx={{
                                color:'black',
                                "&:hover":{
                                    backgroundColor:'yellow',
                                }
                             }}>
                                 PREVIOUS
                             </Button>
                             </ListItem>
                             <Divider/>
                         {
                             num.map((items , index)=>(
                                 <ListItem key={index}>
                                    <Button onClick={()=>handleChangePage(items)} sx={{
                                color:'black',
                                "&:hover":{
                                    backgroundColor:'yellow',
                                    borderRadius:'50%',
                                    width:50,
                                    height:50
                                }
                             }}>
                                     {items}
                                    </Button>
                                 </ListItem>
                                 
                             ))
                         }
                           <Divider/>
                       
                           <ListItem>
                             <Button onClick={handleNext} sx={{
                                color:'black',
                                "&:hover":{
                                    backgroundColor:'yellow',
                                }
                             }}>
                                 NEXT
                             </Button>
                             </ListItem>
                             <Divider/>
                           </List>
                       
                       
                       </Typography>
   </Typography>
  )
}
