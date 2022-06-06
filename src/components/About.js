import { Grid, Stack, Typography, Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';

const  About = () => {
  return (
      <Wrapper id="About">
        <Grid container spacing={10} justify="space-around" sx={{flexGrow: 1}}>
            <Grid item xs={6} 
                sx={{pr:5, mt: 10, mb: 5
            }}>    
                <Stack spacing={4} sx={{ml:15, mr: 5}}>
                    <Button 
                        variant="contained" 
                        sx={{backgroundColor: '#292B2E', borderRadius: 50, boxShadow: 6,
                        '&:hover': {
                            transition: "transform 0.15s ease-in-out",
                            transform: 'scale(1.1)',
                            backgroundColor: '#ffb742',
                            color: 'white'
                    }}}>
                        <AccountTreeOutlinedIcon sx={{mr: 2}}/>
                        <h2>20+ Projects</h2>
                        <ArrowForwardIosIcon sx={{ml: 2}}/>
                    </Button>
                    <Button variant="contained" 
                        sx={{backgroundColor: '#292B2E', borderRadius: 50, boxShadow: 6,
                        '&:hover': {
                            transition: "transform 0.15s ease-in-out",
                            transform: 'scale(1.1)',
                            backgroundColor: '#ffb742',
                            color: 'white'
                    }}}>
                        <CheckCircleOutlinedIcon sx={{mr: 2}}/>
                        <h2>3+ years of Experience</h2>
                        <ArrowForwardIosIcon sx={{color: 'white', ml: 2}}/>
                    </Button>
                    <Button variant="contained" sx={{backgroundColor: '#292B2E', borderRadius: 50, boxShadow: 6,
                    '&:hover': {
                        transition: "transform 0.15s ease-in-out",
                        transform: 'scale(1.1)',
                        backgroundColor: '#ffb742',
                        color: 'white'
                    }}}>
                        <LanguageOutlinedIcon sx={{mr: 2}}/>
                        <h2>15+ Languages</h2>
                        <ArrowForwardIosIcon sx={{color: 'white', ml: 2}}/>
                    </Button>    
                </Stack>
            </Grid>
            <Grid item xs={6}
                sx={{
                    mt: 5,
                    mb: 5,
                    pl: 5,
                    pr: 20,
                    width: '50%'
                }}
            >
                <Typography variant="h3" color="white" sx={{mb: 4, fontFamily:'Poppins', fontWeight: 'bold'}}>About Me</Typography>
                <Typography variant="text" color="#D4D4D4" sx={{mr:3, mb:3, fontSize: "1.3rem"}}>
                    <span>I am </span>
                    <Highlight>Virochaan Ravichandran Gowri</Highlight>
                    <span> an 18 year old </span>  
                    <Highlight>Software Engineer</Highlight>
                    <span> and </span> 
                    <Highlight>Developer</Highlight> 
                    <span> from Toronto. I am currently
                    studying software engineering at the McMaster University. I have 
                    always enjoyed the process of developing solutions to novel problems 
                    and implementing this through code. I have experience working on a variety of
                    different disciplines within software development, including </span>
                    <Highlight>Machine Learning</Highlight>
                    <span>, </span> 
                    <Highlight>Data analytics</Highlight>
                    <span> and currently I am focusing on creating </span> 
                    <Highlight>Full-Stack Web Applications</Highlight>. 
                </Typography>
            </Grid>
        </Grid>
      </Wrapper>
  )
}

export default About

const Wrapper = styled.div`
    margin-top: 5rem;
`

const Highlight = styled.span`
    text-decoration: underline;
    color: #ffb742;
    font-weight: 600;
`