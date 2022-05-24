import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {HiCode} from "react-icons/hi";

const Skills = () => {
  return (
    <Box sx={{backgroundColor: "#212529"}}>
        <Typography variant="h3" sx={{fontFamily: 'Poppins', color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Skills</Typography>
        <Grid container spacing={3}>
            <Grid item xs={4} sx={{mt: 4, mb: 4}}>
                <Paper sx={{backgroundColor: "#D3D3D3", ml:10, mr: 5, py: 5, pl: 5, pr: 5}}>
                    <HiCode size={50}/>
                    <Typography variant="h4">Web Development</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies tristique nulla vel cursus. Nam ac nulla ut erat pellentesque volutpat pretium elementum magna. Fusce fringilla, risus ut lobortis rutrum, turpis ligula finibus quam, eu scelerisque massa purus sit amet nisl. Pellentesque non rhoncus dui. Vestibulum facilisis orci non tellus feugiat, sollicitudin vestibulum risus sagittis. Aenean convallis quis tellus id aliquam. Ut viverra commodo nunc ac porttitor. Suspendisse vitae dolor sollicitudin, dapibus lectus quis, feugiat est.
                    </Typography>
                </Paper>      
            </Grid>
            <Grid item xs={4} sx={{mt: 4, mb: 4}}>
                <Paper sx={{backgroundColor: "#D3D3D3", ml:5, mr: 5}}>
                    <HiCode/>
                    <Typography variant="h4">Web Development</Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies tristique nulla vel cursus. Nam ac nulla ut erat pellentesque volutpat pretium elementum magna. Fusce fringilla, risus ut lobortis rutrum, turpis ligula finibus quam, eu scelerisque massa purus sit amet nisl. Pellentesque non rhoncus dui. Vestibulum facilisis orci non tellus feugiat, sollicitudin vestibulum risus sagittis. Aenean convallis quis tellus id aliquam. Ut viverra commodo nunc ac porttitor. Suspendisse vitae dolor sollicitudin, dapibus lectus quis, feugiat est.
                    </Typography>
                </Paper>                
            </Grid>
            <Grid item xs={4} sx={{ mt: 4, mb: 4}}>
                <Paper sx={{backgroundColor: "#D3D3D3", ml:5, mr: 10}}>
                    <HiCode/>
                    <Typography variant="h4">Web Development</Typography>
                    <Typography >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies tristique nulla vel cursus. Nam ac nulla ut erat pellentesque volutpat pretium elementum magna. Fusce fringilla, risus ut lobortis rutrum, turpis ligula finibus quam, eu scelerisque massa purus sit amet nisl. Pellentesque non rhoncus dui. Vestibulum facilisis orci non tellus feugiat, sollicitudin vestibulum risus sagittis. Aenean convallis quis tellus id aliquam. Ut viverra commodo nunc ac porttitor. Suspendisse vitae dolor sollicitudin, dapibus lectus quis, feugiat est.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>  
    </Box>
  )
}

export default Skills