import { Avatar, Button, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import styled, {keyframes} from 'styled-components'
import ProfilePic from '../images/pfp.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

const Hero = () => {
  return (
    <Wrapper>
        <Typography variant="h4" color="white" sx={{mt: 10, mb: 2, paddingTop: 2}}>
            <span>Hi, I am </span> 
            <Name>Virochaan Ravichandran Gowri</Name>
            <span className="">👋</span>
        </Typography>
        <Typography variant="h3" color="white" sx={{mb: 2}}>
            <Role>Software Engineer and Full-Stack Developer</Role>
        </Typography>
        <Typography variant="h5" color="white" sx={{mb: 2, paddingTop: 2}}>
            <span>I code and develop useful applications, and have fun while doing it</span>
        </Typography>
        <Avatar 
            alt="Virochaan" 
            src={ProfilePic}
            sx={{
                width:250, 
                height:250, 
                display:'block', 
                marginLeft: 'auto', 
                marginRight: 'auto'
            }}>    
        </Avatar>
        <Grid container spacing={2} sx={{mt: 2}}>
            <Grid item xs ={4}>
                <Button 
                    variant="contained" 
                    sx={{backgroundColor: '#292B2E', borderRadius: 50, 
                    '&:hover': {
                        transition: "transform 0.15s ease-in-out",
                        transform: 'scale(1.2)',
                        backgroundColor: '#292B2E',
                        color: 'white'
                }}}>
                    <AccountTreeOutlinedIcon sx={{mr: 2}}/>
                    <h2>20+ Projects</h2>
                    <ArrowForwardIosIcon sx={{color: 'white', ml: 2}}/>
                </Button>
            </Grid>
            <Grid item xs ={4}>
                <Button variant="contained" sx={{backgroundColor: '#292B2E', borderRadius: 50, 
                    '&:hover': {
                        transition: "transform 0.15s ease-in-out",
                        transform: 'scale(1.2)',
                        backgroundColor: '#292B2E',
                        color: 'white'
                }}}>
                    <LanguageOutlinedIcon sx={{mr: 2}}/>
                    <h2>15+ Languages</h2>
                    <ArrowForwardIosIcon sx={{color: 'white', ml: 2}}/>
                </Button>
            </Grid>
            <Grid item xs ={4} >
                <Button variant="contained" sx={{backgroundColor: '#292B2E', borderRadius: 50, 
                '&:hover': {
                    transition: "transform 0.15s ease-in-out",
                    transform: 'scale(1.2)',
                    backgroundColor: '#292B2E',
                    color: 'white'
                }}}>
                    <CheckCircleOutlinedIcon sx={{mr: 2}}/>
                    <h2>3+ years of Experience</h2>
                    <ArrowForwardIosIcon sx={{color: 'white', ml: 2}}/>
                </Button>
            </Grid>
        </Grid>
    </Wrapper>
    
  )
}

export default Hero

const Wrapper = styled.div`
    text-align:center
`

const Name = styled.span`
    font-family: 'Poppins';
    color: #ffb742;
    text-decoration: underline;
`

const animated_text = keyframes`
	0% { background-position: 0px 50%; }
	50% { background-position: 100% 50%; }
	100% { background-position: 0px 50%; }
` 

const Role = styled.span`
    background: linear-gradient(-45deg, #22c1c3, #20d1b2, #5cde92, #99e669, #dae83e);
	background-size: 300%;
	font-family: 'Poppins';
	font-weight: bold;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	animation: ${animated_text} 10s ease-in-out infinite;
	-moz-animation: ${animated_text} 10s ease-in-out infinite;
	-webkit-animation: ${animated_text} 10s ease-in-out infinite;
`


