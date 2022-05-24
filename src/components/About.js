import { Grid, Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const  About = () => {
  return (
      <Wrapper>
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <Typography>Hello</Typography>
            </Grid>
            <Grid item xs={6}
                sx={{
                    ml: 5,
                    mt: 5,
                    mr: 3,
                }}
            >
                    <Typography variant="h3" color="white" sx={{mb: 4, fontFamily:'Poppins', fontWeight: 'bold'}}>About Me</Typography>
                    <Typography variant="text" color="white" sx={{mr:3}}>
                        I am Virochaan Ravichandran Gowri and 18 year old 
                        Software Engineer and Developer from Toronto. I am currently
                        studying software engineering at the McMaster University. I have 
                        always enjoyed the process of developing solutions to novel problems 
                        and implementing this through code. I have experience working on a variety of
                        different disciplines within software development, including machine learning, 
                        data analytics and currently I am focusing on creating Full-Stack Web Applications. 
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
const AboutInfo = styled.div`
    margin
`