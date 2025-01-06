import { Box, Button, List, ListItem, ListItemText, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { PageHeader } from '../Componets/PageHeader'
import tableData from '../table/TableObject'
import { Link } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import cartpageTypes from '../utils/CartPageValidation/CartPageTypes'
import CartPageSchema from '../utils/CartPageValidation/CartPageSchema'
import delImgUrl from "../assets/del.png"
import {Add , Remove} from '@mui/icons-material'
import '../PageStyle/MainStyle.scss'
export const CartPage = () => {
  const {
    control : cartController,
    formState: { errors: cartErrors },
    handleSubmit,
    reset,
} = useForm<cartpageTypes>({
    criteriaMode: "all",
    defaultValues : {
        quantity:'',
        coupon:"",
        postCode:"",
     
    },
    mode: "all",
    reValidateMode: "onChange",
    resolver:yupResolver(CartPageSchema)
})
  const [cartItems , setCartItems] =  useState([])

  const [totals , setTotals] = useState("")

  useEffect(() => {
    
    const storedCartItems = JSON.parse(localStorage.getItem("cart") as string ) || [];
    
    setCartItems(storedCartItems)
    

   
  
    
   
  }, [])


  const calculateTotalprice = (item) => {
    // setTotals(item.price * item.quantity) 
    return item.price * item.quantity
  }

  const handleIncrease = (item) => {
    item.quantity += 1;
    calculateTotalprice(item)
    setCartItems([...cartItems])
    localStorage.setItem("cart", JSON.stringify(cartItems))

  }

  const handleDecrease = (item) => {
  if(  item.quantity > 1){
    item.quantity -= 1;
    calculateTotalprice(item)
    setCartItems([...cartItems])
    localStorage.setItem("cart", JSON.stringify(cartItems))
  }
  
  }


  const handleRemoveItems  = (item) => {
const updateCart = cartItems.filter((cartItems) => cartItems.id !== item.id)
    setCartItems(updateCart)

    updataLocalStorage(updateCart)
  }


  const updataLocalStorage = (cart) => {
    localStorage.setItem("cart" , JSON.stringify(cart))
  }

  const cartSubTotal = cartItems.reduce((total , item) => {
    return total = calculateTotalprice(item)
  } , 0)

  const orderTotal = cartSubTotal;

  return <Typography >
<Typography>
<PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
</Typography>


  <Typography sx={{
    marginTop:'50px',
    
  }}>
    <Typography sx={{
       marginLeft:'40px',
      marginRight:'40px'
    }}>
    <TableContainer component={Paper} sx={{
      // height:'300px',
      // widows:'500px',
      // height:'300px',
      // width:'800px',
      tableLayout:'fixed',
     
      // margin:'20px',
      // position:"relative",
      // right:'50px',
      // left:'5px'
      }} >
      {/* table kula tha ellama podanum  */}
        <Table aria-label='simple table' sx={{
   
      }}>
          {/* table head kula header la podnaum  */}
            <TableHead  sx={{
               background:'darkorange'
            }}>
              {/* table row pota row create agirum athukula namba ella table cells yum podanuum */}
                <TableRow >
                    <TableCell sx={{
                 
                 color:'white',
                 fontWeight:'bold'
               }}>Product</TableCell>
                    <TableCell sx={{
                 
                 color:'white',
                 fontWeight:'bold'
               }}>Price</TableCell>
                    <TableCell sx={{
                 
                 color:'white',
                 fontWeight:'bold',
                //  marginLeft:'30px',
                 position:'relative',
                //  left:'10px',
                 textAlign:'center',
               }}>Quantity</TableCell>
                    <TableCell sx={{
                 
                 color:'white',
                 fontWeight:'bold'
               }}>Total</TableCell>
                    <TableCell sx={{
                 
                 color:'white',
                 fontWeight:'bold'
               }}>Edit</TableCell>
                </TableRow>
            </TableHead>
            {/* table body kula body of the content podanum */}
            <TableBody>
                {
                    cartItems.map((item , index)=> (
                        <TableRow  key={index} >
                              <TableCell sx={{
                                display:'flex',
                                // justifyContent:"center",
                                alignItems:'center',
                                gap:2,
                              }}>
                              <Box sx={{
                                 width:80,
                                 Height:80,
                                 overflow:'hidden',
                              }}>
                              <Link to={"/shop"}>
                                <img  style={
  {
    width:'100%',
    height:'100%',
    objectFit:'cover',
    textDecoration:'none'
  }
} src={item.img} alt='' />
                                </Link>
                              </Box>
                                
                                <Link to={"/shop"} style={{
                                  textDecoration:'none',
                                  color:'black',
                                  fontWeight:'bold'
                                }}>
                               {item.name}
                                </Link>
                              </TableCell>

                      <TableCell sx={{
                         color:'black',
                         fontWeight:'bold'
                      }}>
                        {item.price}
                      </TableCell>

<TableCell sx={{
  display:'flex',
  position
  :'relative',
  bottom:'20px',
  left:'70px',
  // justifyContent:"center",
  // alignItems:'center',
  gap:2
}}>
<Box component={Paper} sx={{
    width:40,
    Height:30,
    overflow:'hidden',
    display:'flex',
    justifyContent:"center",
    alignItems:'center',

}}>
<Typography onClick={() => handleDecrease(item)} sx={{
  //  width:'100%',
  //  height:'100%',
  //  objectFit:'cover',
  cursor:'pointer'
}}>
  <Remove />
</Typography>
</Box>
<Controller 
          control={cartController}
          name='quantity'
          defaultValue=''
          render={({field  , formState} ) =>{
            return(
                <TextField sx={{
                  display:'flex',
                  justifyContent:'center',
                  // width:'50px',
                  width:40,
                  Height:30,
                  overflow:'hidden',
             

                }}
                // name={name}
                // type='text'
                {...field}
                onChange={(e) => {
                  field.onChange(e) 
              
                
                }}
                 value={item.quantity}
                // label='Discount Code'
                variant='outlined'
                
                />
            )
        } }
          />
<Box component={Paper} sx={{
    width:40,
    Height:30,
    overflow:'hidden',
    display:'flex',
    justifyContent:"center",
    alignItems:'center'
}}>
<Typography onClick={()=>handleIncrease(item)} sx={{
   cursor:'pointer'
}}>
   <Add />
</Typography>
</Box>

</TableCell>

                    <TableCell sx={{
                         color:'black',
                         fontWeight:'bold'
                      }} >
                      
                   
                     
                      {/* ${totals} */}
                      {calculateTotalprice(item)}
                    </TableCell>
          <TableCell>
            <a href='#' onClick={() => handleRemoveItems(item)}>
              <img src={delImgUrl} alt='' />
            </a>
          </TableCell>


          
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>



    </Typography>



<Typography component={Paper} sx={{
  padding:"20px",
  margin:'30px'
}}>
  
<Typography sx={{
  marginTop:'30px',
  display:'flex',
  justifyContent:'space-between'
}}>
  
<Typography sx={{
  display:'flex',
  gap:3
}}>
   <Typography >
   

   <Controller 
         control={cartController}
         name='coupon'
         defaultValue=''
         render={({field  , formState} ) =>{
           return(
               <TextField sx={{
                 display:'flex',
                 justifyContent:'center',
                 width:'200px',
            

               }}
               // name={name}
               // type='text'
               {...field}
               onChange={(e) => {
                 field.onChange(e) 
             
               
               }}
               //  value={item.quantity}
               label='Coupon Code'
               variant='outlined'
               
               />
           )
       } }
         />

   </Typography>
<Typography sx={{
     position:'relative',
     top:'10px',
}}>
<Button variant='outlined' sx={{
backgroundColor:'darkorange',
color:'white',
fontWeight:"bold",
"&:hover":{
  backgroundColor:"black"
}
}}>
       Apply Coupon
     </Button>
</Typography>

   </Typography>

    <Typography sx={{
      position:'relative',
      right:'50px',
      top:"10px"
    }}>
      
      <Button variant='outlined' sx={{
border:'1px  black solid ',
backgroundColor:'white',
color:'#555555',
"&:hover":{
  backgroundColor:"darkorange",
  color:'white',
fontWeight:"bold",
border:'1px  black solid ',
}
}}>
        Update Cart
      </Button>
    </Typography>
</Typography>

<Typography sx={{
  display:'flex',
  justifyContent:'space-around',
  marginTop:'20px'
}}>

   
<Typography sx={{
  display:'flex',
  flexDirection:"column"
}}>
  

     
  <Typography>
     <Typography variant='h4' sx={{
      color:'black',
      fontWeight:"bold",
      marginBottom:'20px',

     }}>
       Calculate Shipping
     </Typography>



     <Typography>
     <TextField 
label ='Select State'

select
fullWidth
sx={{
  marginBottom:'20px',
}}
// onChange={(e)=> handleColor(e)}
// value = {color}
>
  
   <MenuItem value='uk' >United KingDom</MenuItem>
   <MenuItem value='bd' >Bangaldesh</MenuItem>
   <MenuItem value='pak' >Pakistan</MenuItem>
   <MenuItem value='ind' >India</MenuItem>
   <MenuItem value='np' >Napal</MenuItem>
 
   
</TextField>
     </Typography>
   </Typography>
   
  
     <Typography sx={{
      display:'flex',
      gap:2
     }}>
      
     <Typography>
     <TextField 
label ='Select State'

select
sx={{
  width:'200px',
  marginBottom:'20px',
}}
// onChange={(e)=> handleColor(e)}
// value = {color}
>
  
   <MenuItem value='uk' >New York</MenuItem>
   <MenuItem value='bd' >London</MenuItem>
   <MenuItem value='pak' >Korachi</MenuItem>
   <MenuItem value='ind' >New Delhi</MenuItem>
 
 
   
</TextField>
     </Typography>



<Typography>
<Controller 
         control={cartController}
         name='postCode'
         defaultValue=''
         render={({field  , formState} ) =>{
           return(
               <TextField sx={{
                 display:'flex',
                 justifyContent:'center',
                 
                  width:'200px',
                  marginBottom:'20px',
               
            

               }}
               // name={name}
               // type='text'
               {...field}
               onChange={(e) => {
                 field.onChange(e) 
             
               
               }}
               //  value={item.quantity}
               label='PostCode/ZIP'
               variant='outlined'
               
               />
           )
       } }
         />
</Typography>

     </Typography>
<Typography>
 <Button sx={{
backgroundColor:'darkorange',
color:'white',
marginBottom:'20px',
fontWeight:"bold",
"&:hover":{
  backgroundColor:"black"
}
}} >
   Update Total
 </Button>
</Typography>


</Typography>

<Typography sx={{
  display:'flex',
  flexDirection:"column",

}}>
<Typography variant='h4' sx={{
   
    color:'black',
    fontWeight:"bold",
    marginBottom:'20px',
    
   
}}>
      Cart Total
    </Typography>

<Typography>
<List>
 <Box component={Paper} sx={{
  border:'black 1px solid',
  display:'flex',
  // justifyContent:'space-between',
  width:'500px',
  marginBottom:'20px',
  // alignItems:"center"
 }}>

  <Typography sx={{
  display:'flex',
  width:'400px'
 }}>
  <ListItemText sx={{
    color:'#555555',
    marginLeft:'5px',
    padding:"5px"
  }}>
  Cart SubTotal
  </ListItemText>
  </Typography>
  
  <ListItem sx={{
    // display:"flex",
    // alignSelf:'flex-end'
    position:"relative",
    left:'180px',
    color:'orangered'
  }}>
    $ {cartSubTotal}
  {/* {totals} */}
  </ListItem>
 </Box>
 
 <Box  component={Paper} sx={{
  border:'black 1px solid',
  display:'flex',
  // justifyContent:'space-between',
  width:'500px',
  marginBottom:'20px',
  // alignItems:"center"
 }}>
  <Typography sx={{
  display:'flex',
  width:'400px'
 }}>
  <ListItemText sx={{
    color:'#555555',
    marginLeft:'5px',
    padding:"5px"
  }}>
    Shipping And Hadling
  </ListItemText>
  <ListItem sx={{
    // display:"flex",
    // alignSelf:'flex-end'
    position:"relative",
    left:'250px',
    color:'orangered'
  }}>
   Free Shipping
  </ListItem>
  </Typography>

  </Box>
  <Box component={Paper} sx={{
  border:'black 1px solid',
  display:'flex',
  // justifyContent:'space-between',
  width:'500px',
  marginBottom:'20px',
  // alignItems:"center"
 }}>
    <Typography sx={{
  display:'flex',
  width:'700px'
 }}>
    <ListItemText sx={{
    color:'#555555',
    marginLeft:'5px',
    padding:"5px"
  }}>
    Order Total
  </ListItemText>
  <ListItem sx={{
    // display:"flex",
    // alignSelf:'flex-end'
    position:"relative",
    left:'310px',
    color:'orangered',
  }}>
   
  
  $ {orderTotal}
  {/* {totals} */}
  </ListItem>
    </Typography>
  
  </Box>

</List>
</Typography>


</Typography>

</Typography>
</Typography>



  </Typography>
</Typography>
  

  
}
