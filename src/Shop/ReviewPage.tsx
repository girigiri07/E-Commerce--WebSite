import { Box, Button, List , ListItem, TextField, Typography , Paper } from '@mui/material';
import React, { useState } from 'react'
import ReviewPageSchema from '../utils/ReviewPageValidation/ReviewPageSchema';
import ReviewPageTypes from '../utils/ReviewPageValidation/ReviewPageTypes';
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PopularPost } from './PopularPost';
import { PopularTags } from './PopularTags';


const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];

export const ReviewPage = () => {
  
  const {
    control :reviewController,
    formState:{errors:reviewErrors},
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
  }= useForm<ReviewPageTypes>({
    criteriaMode: "all",
    mode: "all",
        reValidateMode: "onChange",
        defaultValues:{

        fullName:'',
        email:'',
        message:'',
       
        },
        resolver:yupResolver(ReviewPageSchema)
  })

    const [ reviewShow , setReviewShow] = useState(false)
     

    const handleReview = () => {
      setReviewShow(!reviewShow)
    }
  
  return <Typography>
        <Typography sx={{
          // display:'flex',
          // justifyContent:'space-between'
        }}>
       
        <Typography sx={{
          postion:'relative',
          right:"100px",
          // alignSelf:'flex-start'
          marginRight:'500px',
        }}>
        <Typography sx={{
          // gap:2,
          marginBottom:'10px'
          
        }}>
            <Button sx={{
              backgroundColor:'orange',
              marginRight:'10px',
              marginLeft:'10px',
              color:'white',
              fontWeight:'bold',
              "&:hover":{
                backgroundColor:'orangered'
              }
            }}
            onClick={handleReview}
            >
                Description
            </Button>
            <Button sx={{
              backgroundColor:'blue',
              color:'white',
              fontWeight:'bold',
              "&:hover":{
                backgroundColor:'#6610f2'
              }
            }}
            onClick={handleReview}
            >
                Reviews
            </Button>
        </Typography>

        {
          reviewShow && 
          <Typography component={Paper} sx={{
            padding:'10px',
            marginTop:'10px',
          }}>
<Typography sx={{
            marginTop:'10px',
            marginLeft:'10px'
            // display:'flex',
            // flexDirection:'column'
          }} >

            <Typography sx={{
           
             display:'flex',
            flexDirection:'column'
          }}>
            {ReviewList.map((review, index) => (
             
              <Typography sx={{
            display:'flex'
          }}>
              <Typography >
               <List>
                  <Box sx={{
                    borderRadius:'50%',
 width:100,
 Height:100,
 overflow:'hidden'
                  }}>
                     <ListItem key={index}>
                    <img style={
  {
    width:'100%',
    height:'100%',
    objectFit:'cover'
  } } src={review.imgUrl} alt='' />
                  </ListItem>
                    </Box>
                 


                </List>
               </Typography>
               <Typography>
               <Typography sx={{
                display:'flex',
                gap:2
               }}>
               <Typography variant='h6' sx={{
                fontWeight:'bold'
              }}>
                  {review.name}
                </Typography>
                <Typography sx={{
                  color:'#555555',
                  marginTop:'8px'
                }}>
                  {review.date}
                </Typography>
               </Typography>
                <Typography sx={{
                  color:'#555555'
                }}>
                  {review.desc}
                </Typography>
               </Typography>
              </Typography>
              
            ))}
          </Typography>
            </Typography>
          
          <Typography sx={{
            marginLeft:'10px',
            marginTop:'5px'
          }}>
              <Typography variant='h6' sx={{
                fontWeight:'bold',
                marginBottom:'15px'
              }}>
                {reviwtitle}
              </Typography>

              <Typography >
             <Typography sx={{
              display:'flex',
              gap:10
             }}>
             <Controller
                  control={reviewController}
                  name='fullName'
                  defaultValue=''
                  render={({ field, formState }) => {
                    return (
                      <TextField sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '800px',
                        marginBottom:'15px'
                      }}
                        // name={name}
                        // type='text'
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);

                        } }
                        // value={searchText}
                        label='Full Name'
                        variant='outlined' />
                    );
                  } } />
                <Controller
                  control={reviewController}
                  name='email'
                  defaultValue=''
                  render={({ field, formState }) => {
                    return (
                      <TextField sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '800px',
                        marginBottom:'15px'
                      }}
                        // name={name}
                        // type='text'
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);

                        } }
                        // value={searchText}
                        label='Email'
                        variant='outlined' />
                    );
                  } } />
             </Typography>
               <Typography>
               <Controller
                  control={reviewController}
                  name='messages'
                  defaultValue=''
                  render={({ field, formState }) => {
                    return (
                      <TextField sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        width: '800px',
                        marginBottom:'15px'
                      }}
                        // name={name}
                        // type='text'
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);

                        } }
                        // value={searchText}
                        label='Type Message Here'
                        variant='outlined' />
                    );
                  } } />
               </Typography>
              </Typography>

              <Typography>
                <Button sx={{
                  backgroundColor:'orange',
                  color:"white",
                  fontWeight:'bold',
                  "&:hover":{
                    backgroundColor:'black'
                  }
                }}>
                  Submit Review
                </Button>
              </Typography>
            </Typography>
            

          </Typography>
          
          
        }

     {
      !reviewShow && 
     <Typography component={Paper} sx={{
      padding:'10px'
     }}>
 <Typography>
            <Typography sx={{
              marginTop:'15px',
              marginLeft:'10px'
            
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
              .

            </Typography>
            
          <Typography sx={{
            display:'flex',
            gap:10
          }}>
          <Typography>
            <List>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum

              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum

              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, doloru m

              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum

              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum

              </ListItem>
              <ListItem>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum

              </ListItem>
            </List>
              </Typography>

            <Typography sx={{
              position:'relative',
              top:'50px',
              right:'50px'
            }}>
              <img src='/images/shop/01.jpg' alt='' />
            </Typography>
            </Typography>
          </Typography>
          <Typography sx={{
              marginTop:'15px'
            }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem hic dolor, dolorum, libero quam, necessitatibus cupiditate eos aliquam itaque cumque unde temporibus! Esse molestias voluptate libero necessitatibus quasi. Hic, nobis.
              .

            </Typography>
      </Typography>
     }
          </Typography>

       {/* <Typography>
       <Typography>
            <PopularPost />
          </Typography>
          <Typography>
            <PopularTags />
          </Typography>
       </Typography> */}

        </Typography>
    </Typography>
  
}
