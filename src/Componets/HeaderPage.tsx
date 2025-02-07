import React, { useState } from 'react'
import {
AppBar,
Toolbar,
Typography,
IconButton,
Badge,
Avatar,
MenuItem,
Menu,
Button,
Tooltip,
Stack,
Dialog,
DialogActions,
DialogContent,
DialogContentText,
Box

}from '@mui/material'
import NotificationIcon from '@mui/icons-material/Notifications'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutesList } from '../Routes/PrivateRoutes';
import { PublicRoutesList } from '../Routes/PublicRoutes';
import logo from "../assets/allimages/logo/logo.png"
import { toast } from 'react-toastify';
import { HomePage } from '../home/HomePage';
import { Link } from 'react-router-dom'

export const HeaderPage = () => {
  const [anchor , setAnchor] = useState<HTMLElement |null>(null)
  const open = Boolean(anchor)
 const [isDialogOpen , setIsDialogOpen] = useState(false)
  const navigate = useNavigate()

    const {
      CHANGEPASSWORD,
      HOME
    } = PrivateRoutesList

    const {
LOGIN
    } = PublicRoutesList
    let src = 'giri.jpg'
   console.log(src)
  
    const handleOpenItems = (event:React.MouseEvent<HTMLButtonElement>) =>{
        setAnchor(event.currentTarget)
    }

    const handleClose = () =>{
        setAnchor(null)
    }

    const handleDialogOpen = () =>{
      setIsDialogOpen(true)
    }

    const handleLogOut = () =>{
      setIsDialogOpen(false)
      // navigate(LOGIN)
      toast.success('Logout successfull')
      localStorage.clear()
    }

    const handleDialogClose = () =>{
      setIsDialogOpen(false)
    }
  return (



    <>
    
    <AppBar position='fixed' sx={{
      background:'#fdfdfd73',
      backdropFilter:'blur(20.0px)',

    }}
    >
      <Toolbar 
      
      sx={{
        display: 'flex',
        justifyContent: 'space-between'
      }}
      
      >

{/* <Typography className='header-section style-4'>
<Typography className='header-top'>
<Typography className='container'>
<Typography className='header-top-area'>


</Typography>
</Typography>
</Typography>
</Typography> */}


        <Typography sx={{ flexGrow: 1 }}>
          <img src={logo} alt='' />
        </Typography>


        <Box>

        <Link to={"/"} >
          <Button color='inherit' sx={{
            color:'black',
            fontWeight:'bold'
          }}>
          HOME
          </Button>
           
            </Link>

            <Link to={"/shop"} >
          <Button color='inherit' sx={{
            color:'black',
            fontWeight:'bold'
          }}>
          SHOP
          </Button>
           
            </Link>

            <Link to={"/blog"} >
          <Button color='inherit' sx={{
            color:'black',
            fontWeight:'bold'
          }}>
          BLOG
          </Button>
           
            </Link>

            <Link to={"/about"} >
          <Button color='inherit' sx={{
            color:'black',
            fontWeight:'bold'
          }}>
          ABOUT
          </Button>
           
            </Link>

            <Link to={"/contact"} >
          <Button color='inherit' sx={{
            color:'black',
            fontWeight:'bold'
          }}>
          CONTACT
          </Button>
           
            </Link>
        
        
     
        
          <Button
            id='profile-icon'
            onClick={handleOpenItems}
            aria-controls={open ? 'menu-items' : undefined}
            aria-expanded={open ? true : undefined}
            aria-haspopup='true'
          >
            <Tooltip title='My Profile'>
              <Avatar
                src={`${src === '' ? '' : 'giri.jpg'}`}
              >
                S
              </Avatar>
            </Tooltip>
          </Button>
        </Box>


        <Dialog open={isDialogOpen}>

          <DialogContent>
            <DialogContentText>
              Are You Sure You Want To Log Out ?
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            <Button onClick={handleLogOut}>
              Yes
            </Button>
            <Button onClick={handleDialogClose}>
              No
            </Button>
          </DialogActions>
        </Dialog>

        <Menu
          id='menu-items'
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
        >
          <MenuItem>MY Profile</MenuItem>
          {/* <MenuItem onClick={() => navigate(CHANGEPASSWORD)}> Change Password</MenuItem> */}
          <MenuItem onClick={handleDialogOpen}> Log Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
 
     
      </>
  )
}
 {/* <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
              <CatchingPokemonIcon />
            </IconButton >
            <Typography component='div' variant='h3' sx={{
                flexGrow:1,
                 textAlign:'center'
                }} >
                SHOP CART
            </Typography> */}
                    {/* <Stack spacing={2} sx={{marginRight:'20px'}} >
                    <Badge badgeContent={0} showZero>
                        <Tooltip title='No Notification'>
                        <NotificationIcon />
                        </Tooltip>
                    </Badge>
                    </Stack> */}