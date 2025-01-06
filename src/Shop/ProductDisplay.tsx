import { Typography,
    TextField,
    MenuItem,
    Button,
    Paper,
    IconButton,
    Box,
    

 } from '@mui/material'
 import {Add , Remove} from '@mui/icons-material'
import React, { useState } from 'react'
import { Ratings } from '../Componets/Ratings'
import SingleProductSchema from '../utils/SingleProductPage/SingleProductSchema'
import singleProductType from '../utils/SingleProductPage/SingleProductTypes'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import changePasswordType from '../utils/ChangeFormValidation/ChangeFormType'
import { Link } from 'react-router-dom';
import { ReviewPage } from './ReviewPage'
const desc = <p>
Energistis an deliver metres after <br />
 avisonary Appropria Rransition enterpria an sources <br />
 applications emerging pad template
</p>


export const ProductDisplay = ({item}) => {
    const {name ,  id , price , seller , ratingCount , quantity , img} = item
    const [ quantityAmount , setQuantityAmouont] = useState(quantity)
    const [coupon , setCoupon ] = useState("")
    const [size , setSize] = useState("Select Size")
    const [color , setColor ] = useState("Select Color ")
    console.log(ratingCount)
    const {
        control : SingleproductController,
        formState: { errors: SingleProductErrors },
        handleSubmit,
        reset,
    } = useForm<singleProductType>({
        criteriaMode: "all",
        defaultValues : {
            code:'',
         
        },
        mode: "all",
        reValidateMode: "onChange",
        resolver:yupResolver(SingleProductSchema)
    })
console.log(quantity)
    const handleSize = (e) =>{
        setSize(e.target.value)
    }
    const handleColor = (e) =>{
        setColor(e.target.value)
    }

    const handleDecrease = () =>{
        console.log("come")
        if(quantityAmount > 1){
            setQuantityAmouont(quantityAmount - 1)
        }
    }

    const handleIncrease = () =>{
        console.log("come 1")
            setQuantityAmouont(quantityAmount + 1)
        
    }
    console.log(quantityAmount)

   const handleCart = () => {
    const product = {
        id:id,
        img:img,
        name:name,
        price:price,
        quantity:quantityAmount,
        size:size,
        color:color,
        coupon:coupon

    }

    console.log(product)
    
    const exisitingCart = JSON.parse(localStorage.getItem("cart") as string ) || [];
console.log(exisitingCart)
    const existingProductIndex = exisitingCart.findIndex((item: { id: any }) => item.id == id);
    
    if(existingProductIndex !== -1 ){
        exisitingCart[existingProductIndex].quantity == quantityAmount
    }
    else{
        exisitingCart.push(product)
    }

    localStorage.setItem("cart", JSON.stringify(exisitingCart))
    setQuantityAmouont(1)
setSize("Select Size")
setColor("Select COlor")
setCoupon("")
   }

  return   <Typography component={Paper} sx={{
        // display:'flex'
        position:'relative',
        top:'200px',
        right:'30px',
        padding:'10px'
    }}>
<Typography variant='h4' sx={{
    color:'black',
    fontWeight:'bold',
    marginBottom:'5px'
}}>
    {name}
</Typography>



<Typography sx={{
    color:'yellow',
    marginBottom:'5px'
}}
>
    <Ratings />
  
     </Typography> 
  
    {/* <Typography sx={{
        color:'black'
    }}>
       {ratingCount} 
        </Typography> */}


  <Typography sx={{
    display:'flex',
    gap:1,
    marginBottom:'5px'
 }}>
        
<Typography variant='h3' sx={{
            color:'black',
            
        }}>
            $
        </Typography>
<Typography variant='h3'>
    {price}
</Typography>
</Typography>
<Typography variant='h4' sx={{
     marginBottom:'5px'
}}>
    {seller}
</Typography>
<Typography variant='body1' sx={{
     marginBottom:'5px'
}}>
    {desc}
</Typography>
<Typography sx={{
    display:'flex',
    gap:2
}}
>
<Typography>
<TextField  

label ='Select Size'

select
// fullWidth
onChange={(e)=> handleSize(e)}
value = {size}
sx={{
    width:'200px',
    marginBottom:'15px'

}}
>
   
    <MenuItem value='SM' >SM</MenuItem>
    <MenuItem value='MD' >MD</MenuItem>
    <MenuItem value='LG' >LG</MenuItem>
    <MenuItem value='XL' >XL</MenuItem>
    <MenuItem value='XLL' >XLL</MenuItem>
    
</TextField>
</Typography>

<Typography>
<TextField 
label ='Select Color'

select
fullWidth
onChange={(e)=> handleColor(e)}
value = {color}
sx={{
    width:'200px',
    marginBottom:'15px'

}}
>
   
    <MenuItem value='Pink' >Pink</MenuItem>
    <MenuItem value='Ash' >Ash</MenuItem>
    <MenuItem value='Red' >Red</MenuItem>
    <MenuItem value='White' >White</MenuItem>
    <MenuItem value='Blue' >Blue</MenuItem>
    <MenuItem value='Black' >Black</MenuItem>
    
</TextField>
</Typography>
</Typography>
<Typography  sx={{
    display:"flex",
    gap:2,
    marginBottom:'15px'
}}>
<Typography sx={{
    display:"flex",
    gap:1
}}>
    <Typography  component={Paper} onClick={() => handleDecrease()} 
  sx={{
 display:'flex',
 justifyContent:'center',
 alignItems:'center'
  }}  >
        <IconButton sx={{
width:'30px',
height:'30px',

    }}>
        <Remove />
        </IconButton>
 
</Typography>

<Box sx={{
  position:'relative',
  top:'15px'
    
        }}>
<Typography component={Paper} onChange={(e) => setQuantityAmouont(parseInt(e.target.value , 10))} 
sx={{
    width:'30px',
    height:'30px',
    textAlign:'center',
    
        }}
>
   <Typography   sx={{
 display:'flex',
 justifyContent:'center',
 alignItems:'center'
  }} >
   {quantityAmount}
   </Typography>
</Typography>
</Box>
<Typography component={Paper} onClick={()=>handleIncrease()}   sx={{
 display:'flex',
 justifyContent:'center',
 alignItems:'center'
  }} >
<IconButton sx={{
width:'30px',
height:'30px',
textAlign:'center'
    }}>
        <Add />
        </IconButton>
</Typography>
</Typography>

<Typography>
<Controller 
          control={SingleproductController}
          name='code'
          defaultValue=''
          render={({field  , formState} ) =>{
            return(
                <TextField sx={{
                  display:'flex',
                  justifyContent:'center',
                  width:'300px',
             

                }}
                // name={name}
                // type='text'
                {...field}
                onChange={(e) => {
                  field.onChange(e) 
                  setCoupon(e.target.value)
                
                }}
                 value={coupon}
                label='Discount Code'
                variant='outlined'
                
                />
            )
        } }
          />
</Typography>

</Typography>

<Typography sx={{
    display:'flex',
    gap:5
}}>
    <Button  onClick={()=> handleCart()} sx={{
        backgroundColor:'#fd7e14',
        color:'white',
        fontWeight:'bold',
        "&:hover":{
        backgroundColor:'black',
            fontWeight:'bold',
        }

    }}>
        ADD TO CART
    </Button>

    <Button  sx={{
        backgroundColor:'#6610f2',
       
       
    }}>
     <Link style={{
        textDecoration:'none',
        color:'white',
        fontWeight:'bold',
       
        
     }} to="/CartPage">
    <Button sx={{
         textDecoration:'none',
         color:'white',
         fontWeight:'bold',
         "&:hover":{
            backgroundColor:'black',
                fontWeight:'bold',
            }
    
    }}>
    CHECK OUT 
    </Button>
     </Link>
    </Button>
</Typography>

<Typography sx={{
    //    postion:'absolute',
    //    right:"100px"
    // alignSelf:'flex-start'
    marginLeft:'auto'
}}>
    {/* <ReviewPage /> */}
</Typography>
    </Typography>
  
}
