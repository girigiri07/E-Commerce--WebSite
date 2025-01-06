import React, { useState } from 'react'
import ShopSearchSchema from '../utils/ShopSearchValidation/ShopSearchSchema'
import shopSearchTypes from '../utils/ShopSearchValidation/ShopSearchType'
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, InputAdornment, Paper, TextField, Typography } from '@mui/material';
import { SelectedCategory } from '../Componets/SelectedCategory';

import { Link } from 'react-router-dom';
import '../PageStyle/BannerStyle.scss';
import SearchIcon from '@mui/icons-material/Search'
import '../PageStyle/MainStyle.scss';

export const Search = ({GridList , Products}) => {
    
  const [searchText , setSearchText] = useState('')
  const [filterItems ,setFilterItems] = useState(Products)
console.log(filterItems)
  const {
    control :searchrController,
    formState:{errors:searchErrors},
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
  }= useForm<shopSearchTypes>({
    criteriaMode: "all",
    mode: "all",
        reValidateMode: "onChange",
        defaultValues:{

          name:'',
       
        },
        resolver:yupResolver(ShopSearchSchema)
  })

  const handleSingleFieldChange = (event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    console.log(event.target.value)
    const searchData = event.target.value
    setSearchText(searchData)

    const filters = Products.filter((product:any) => product.name.toLowerCase().includes(searchData.toLowerCase()))
    setFilterItems(filters)
  }

  return  <Typography sx={{
    marginTop:'100px',
    marginLeft:'10px',
    // marginRight:'50px',
  }}>
      <Typography component={Paper}>
      <Controller 
          control={searchrController}
          name='name'
          defaultValue=''
          render={({field  , formState} ) =>{
            return(
                <TextField  
                InputProps={{
                  endAdornment:(
                    <InputAdornment position='end' >
                      <SearchIcon 
                      onClick={handleSingleFieldChange}
                      sx={{
                        cursor:'pointer'
                      }}
                      />
                    </InputAdornment>
                  )
                }}
                sx={{
                  display:'flex',
                  justifyContent:'center',
                  marginBottom:'10px'
                  // width:'800px',
             

                }}
                // name={name}
                // type='text'
                {...field}
                onChange={(e) => {
                  field.onChange(e) 
                  handleSingleFieldChange(e)
                }}
                value={searchText}
                label='Search Your Product'
                variant='outlined'
                

              
                />
            )
        } }
          />
      </Typography>
      <Typography >
        {
          searchText && filterItems.map((product:any)=>(
            <Link key={product.id} to={`/shop/${product.id}`} >
             <Typography sx={{
              display:'flex',
             
              marginBottom:'15px'
             }}>
           <Box sx={{
            width:50,
            Height:50,
            overflow:'hidden'
           }}>
           <img  style={{
            width:'100%',
            height:'100%',
            objectFit:'cover'
           }} src={product.img} alt='' />
           </Box>
                
          

              <Typography sx={{
                marginLeft:'10px'
              }}>
                <Link to={`/shop/${product.id}`} className='edit-decoration'
                
                >
                <Typography sx={{
                  color:'#555555',
                  marginBottom:'10px',
                
                  
                }}
                >
                  {product.name}
                </Typography>
                </Link>
                <Typography >
                <Typography  className='edit-decoration' sx={{
                  color:'black',
                  
                }}
                >
                  {product.price}
                </Typography>
                </Typography>
              </Typography>
             </Typography>
            
            </Link>
          ))
        }
      </Typography>
    </Typography>
  
}
