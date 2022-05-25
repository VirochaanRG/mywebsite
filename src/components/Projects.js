import {Typography, Box, Card, CardActionArea, CardContent, CardActions, CardMedia, Button } from '@mui/material'
import React from 'react'
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import Delicious from '../images/delicious.png'
import ProjectInfo from './ProjectInfo';


const slideStyle = {marginLeft: "2rem", marginTop: "2rem", marginRight: "2rem"}
const projectDesc = {title: "Lizard", 
                    desc: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
                }

const Projects = () => {
  return (
    <Box>
        <Typography variant="h3" sx={{fontFamily: 'Poppins', color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Projects</Typography>
        <Splide
            options={{perPage: 4,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: "4rem",}}
            
        >
            <SplideSlide style={slideStyle}>
                {ProjectInfo(Delicious, projectDesc)}
            </SplideSlide>
            <SplideSlide style={slideStyle}>
                {ProjectInfo(Delicious, projectDesc)}
            </SplideSlide>
            <SplideSlide style={slideStyle}>
                {ProjectInfo(Delicious, projectDesc)}
            </SplideSlide>
            <SplideSlide style={slideStyle}>
                {ProjectInfo(Delicious, projectDesc)}
            </SplideSlide>
            <SplideSlide style={slideStyle}>
                {ProjectInfo(Delicious, projectDesc)}
            </SplideSlide>
        </Splide>
    </Box>
  )
}

export default Projects