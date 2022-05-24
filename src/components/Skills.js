import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Skills = () => {
  return (
    <Box sx={{backgroundColor: "#212529"}}>
        <Typography variant="h3" sx={{fontFamily: 'Poppins', color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Skills</Typography>
        <Grid container>
            <Grid item xs={4} sx={{backgroundColor: "#D3D3D3"}}>
                <Typography sx={{ml:10, mr: 10}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies tristique nulla vel cursus. Nam ac nulla ut erat pellentesque volutpat pretium elementum magna. Fusce fringilla, risus ut lobortis rutrum, turpis ligula finibus quam, eu scelerisque massa purus sit amet nisl. Pellentesque non rhoncus dui. Vestibulum facilisis orci non tellus feugiat, sollicitudin vestibulum risus sagittis. Aenean convallis quis tellus id aliquam. Ut viverra commodo nunc ac porttitor. Suspendisse vitae dolor sollicitudin, dapibus lectus quis, feugiat est.
                </Typography>
            </Grid>
            <Grid item xs={4} sx={{backgroundColor: "#D3D3D3"}}>
                <Typography sx={{ml:10, mr: 10}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies tristique nulla vel cursus. Nam ac nulla ut erat pellentesque volutpat pretium elementum magna. Fusce fringilla, risus ut lobortis rutrum, turpis ligula finibus quam, eu scelerisque massa purus sit amet nisl. Pellentesque non rhoncus dui. Vestibulum facilisis orci non tellus feugiat, sollicitudin vestibulum risus sagittis. Aenean convallis quis tellus id aliquam. Ut viverra commodo nunc ac porttitor. Suspendisse vitae dolor sollicitudin, dapibus lectus quis, feugiat est.
                </Typography>                
            </Grid>
            <Grid item xs={4} sx={{backgroundColor: "#D3D3D3"}}>
                <Typography sx={{ml:10, mr: 10}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies tristique nulla vel cursus. Nam ac nulla ut erat pellentesque volutpat pretium elementum magna. Fusce fringilla, risus ut lobortis rutrum, turpis ligula finibus quam, eu scelerisque massa purus sit amet nisl. Pellentesque non rhoncus dui. Vestibulum facilisis orci non tellus feugiat, sollicitudin vestibulum risus sagittis. Aenean convallis quis tellus id aliquam. Ut viverra commodo nunc ac porttitor. Suspendisse vitae dolor sollicitudin, dapibus lectus quis, feugiat est.
                </Typography>
            </Grid>
        </Grid>  
    </Box>
  )
}

export default Skills