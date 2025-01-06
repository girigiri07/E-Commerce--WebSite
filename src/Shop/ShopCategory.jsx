import { Button, Typography , Paper , Box , Grid} from '@mui/material'
import React from 'react'
import Data from '../products.json'
export const ShopCategory = ({ filterItems,setItems, menuItems,setProducts,selectedCategory}) => {
    console.log(filterItems)
    console.log(setItems)
    console.log(menuItems)
    console.log(setProducts)
    console.log(selectedCategory)
  return <Typography component={Paper} sx={{
 
    marginTop:'30px',
    // marginRight:'50px',
    padding:'10px'
 
  }}>
        <Typography variant='h4' sx={{
            color:'black',
            fontWeight:'bold',
            marginBottom:'10px'
        }}>
            ALL Categories
        </Typography>
       <Box sx={{
        width:'100%',
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr) ',
        // height:'100vh',
        // display:'grid',
        // gridTemplateColumns:'1fr 1fr 1fr'
        // display:'grid',
        // gridTemplateColumns:'1fr, 1fr,1fr '
       }}>
        <Grid container spacing={2} sx={{
             marginTop:'10px',
             marginLeft:'10px'
        }}>
        <Typography component={Paper} sx={{
       display:'flex',
       alignItems:'center',

        // display:'flex',
        // gap:2
      }}>
      <Button onClick={()=>setProducts(Data)}  sx={{
            backgroundColor:'white',
            color:'black',
            // gap:2,
            // marginLeft:'5px',
           
           
           
            // border:'1px black solid',
            "&:hover":{
                backgroundColor:'yellow'
            }
        }}>
            ALL
        </Button>
      </Typography>
        </Grid>
      
        <Typography sx={{
            // display:'flex',
            display:'grid',
            gridTemplateColumns:'repeat(3,1fr) ',
            gap:2,
            marginLeft:'5px'
        }}>
            {
menuItems.map((menu , index)=>{
    return(
    <Typography component={Paper} sx={{
        margin:'5px',
         width:'100px',
    }}>
 <Button key={index} onClick={()=> filterItems(menu)} sx={{
            backgroundColor:'white',
            color:'black',
            gap:2,
            
          
           
            "&:hover":{
                backgroundColor:'yellow'
            }
        }} >
            {menu}
        </Button>
        </Typography>
    )
})
            }
        </Typography>
       </Box>
    </Typography>
  
}
