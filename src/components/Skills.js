import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import {HiCode} from "react-icons/hi";
import {SiPython} from "react-icons/si"
import {IoAnalyticsSharp} from "react-icons/io5"
const styleInfo = {paddingRight: "2rem", verticalAlign: 'middle', color: '#ffb742'};

const Skills = () => {
  return (
    <Box sx={{backgroundColor: "#212529"}}>
        <Typography variant="h3" sx={{fontFamily: 'Poppins', color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Skills</Typography>
        <Grid container spacing={3}>
            <Grid item xs={4} sx={{mt: 4, mb: 4}}>
                <Paper sx={{backgroundColor: "rgba(20, 33, 61, 0.4)", borderRadius: 6, boxShadow: 7, ml:10, mr: 5, py: 5, pl: 5, pr: 5}}>
                    <Typography variant="h5" sx={{verticalAlign: 'top', fontWeight: 'bold', color: 'white'}}><HiCode size={50} style={styleInfo}/>Web Development</Typography>
                    <Typography sx={{color: "#D4D4D4", pt: 2}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies tristique nulla vel cursus. Nam ac nulla ut erat pellentesque volutpat pretium elementum magna. Fusce fringilla, risus ut lobortis rutrum, turpis ligula finibus quam, eu scelerisque massa purus sit amet nisl. Pellentesque non rhoncus dui. Vestibulum facilisis orci non tellus feugiat, sollicitudin vestibulum risus sagittis. Aenean convallis quis tellus id aliquam. Ut viverra commodo nunc ac porttitor. Suspendisse vitae dolor sollicitudin, dapibus lectus quis, feugiat est.
                    </Typography>
                </Paper>      
            </Grid>
            <Grid item xs={4} sx={{mt: 4, mb: 4}}>
                <Paper sx={{backgroundColor: "rgba(20, 33, 61, 0.4)", borderRadius: 6, boxShadow: 7, ml:7.5, mr: 7.5, py: 5, pl: 5, pr: 5, 
                            '&:hover':{
                                transition: "transform 0.15s ease-in-out",
                                transform: 'scale(1.05)',
                                backgroundColor: 'rgba(20, 33, 61, 1)',
                        }}}>
                    <Typography variant="h5" sx={{verticalAlign: 'top', fontWeight: 'bold', color: 'white'}}><SiPython size={50} style={styleInfo}/>Web Development</Typography>
                    <Typography sx={{color: "#D4D4D4", pt: 2}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies tristique nulla vel cursus. Nam ac nulla ut erat pellentesque volutpat pretium elementum magna. Fusce fringilla, risus ut lobortis rutrum, turpis ligula finibus quam, eu scelerisque massa purus sit amet nisl. Pellentesque non rhoncus dui. Vestibulum facilisis orci non tellus feugiat, sollicitudin vestibulum risus sagittis. Aenean convallis quis tellus id aliquam. Ut viverra commodo nunc ac porttitor. Suspendisse vitae dolor sollicitudin, dapibus lectus quis, feugiat est.
                    </Typography>
                </Paper>                
            </Grid>
            <Grid item xs={4} sx={{ mt: 4, mb: 4}}>
                <Paper 
                    sx={{backgroundColor: "rgba(20, 33, 61, 0.4)", borderRadius: 6, boxShadow: 7, ml:5, mr: 10, py: 5, pl: 5, pr: 5,
                        '&:hover':{
                            transition: "transform 0.15s ease-in-out",
                            transform: 'scale(1.05)',
                            backgroundColor: 'rgba(20, 33, 61, 1)',
                        }
                    }}>
                    <Typography variant="h5" sx={{verticalAlign: 'top', fontWeight: 'bold', color: 'white'}}><IoAnalyticsSharp size={50} style={styleInfo}/>Web Development</Typography>
                    <Typography sx={{color: "#D4D4D4", pt: 2}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies tristique nulla vel cursus. Nam ac nulla ut erat pellentesque volutpat pretium elementum magna. Fusce fringilla, risus ut lobortis rutrum, turpis ligula finibus quam, eu scelerisque massa purus sit amet nisl. Pellentesque non rhoncus dui. Vestibulum facilisis orci non tellus feugiat, sollicitudin vestibulum risus sagittis. Aenean convallis quis tellus id aliquam. Ut viverra commodo nunc ac porttitor. Suspendisse vitae dolor sollicitudin, dapibus lectus quis, feugiat est.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>  
    </Box>
  )
}

export default Skills