import {Typography, Box } from '@mui/material'
import React from 'react'
import {Splide, SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import ProjectInfo from './ProjectInfo';
import Delicious from '../images/delicious.png'
import Watchlist from '../images/watchlist.png'
import Predictor from '../images/premdictor.png'
import Nlp from "../images/nlp.png"


const slideStyle = {marginLeft: "2rem", marginTop: "2rem", paddingRight: "2rem", paddingTop: "2rem", paddingBottom: "5rem"}

const projectDescRecipe = {
    image: Delicious,
    title: "Recipes Repository", 
    desc: "A Web App created using React getting data from an Recipe Api and dynamically outputting it.",
    GitLink: "https://github.com/VirochaanRG/delicious"
}

const projectDescWatchlist = {
    image: Watchlist,
    title: "Cryptos Watchlist", 
    desc: "A Crypto Currency Watchlist with a front-end with Vue and a backend with Nodejs with MongoDB used to store data. Dynamically update with crypto-compare api",
    GitLink: "https://github.com/VirochaanRG/watchlist"
}

const projectDescPredictor = {
    image: Predictor,
    title: "Premier League Predictor", 
    desc: "Using premier league team data, a python model would use various algorithms in order to predict the potential final league table. This data was then rendered through flask",
    GitLink: "https://github.com/VirochaanRG/Premdictor"
}

const projectDescNlp = {
    image: Nlp,
    title: "NLP Python", 
    desc: "Basic Nlp Algorithm to analyze a financial text and extract keywords, symbols, and tickers in order to make informed decisions using Spacy and Python.",
    GitLink: "https://github.com/VirochaanRG/Premdictor"
}

const Projects = () => {
  return (
    <Box id="Projects">
        <Typography variant="h3" sx={{fontFamily: 'Poppins', color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Featured Projects</Typography>
        <Splide
            options={{perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: "4rem",}}
            
        >
            <SplideSlide style={slideStyle}>
                {ProjectInfo(projectDescRecipe)}
            </SplideSlide>
            <SplideSlide style={slideStyle}>
                {ProjectInfo(projectDescWatchlist)}
            </SplideSlide>
            <SplideSlide style={slideStyle}>
                {ProjectInfo(projectDescPredictor)}
            </SplideSlide>
            <SplideSlide style={slideStyle}>
                {ProjectInfo(projectDescNlp)}
            </SplideSlide>
        </Splide>
    </Box>
  )
}

export default Projects