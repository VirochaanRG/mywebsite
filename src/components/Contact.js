import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import {Box, Grid, Typography, Link, Button} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import styled from 'styled-components'

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t3lvwsm', 'template_35ly707', form.current, 'TmfWim2HY1TgxEBGB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Box sx={{mb: 10}} id="Contact">
      <Typography variant="h3" sx={{fontFamily: 'Poppins', color: 'white', textAlign: 'center', fontWeight: 'bold', mb: 10}}>Contact Me</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ContactHolder>
            <Typography variant="text" sx={{fontWeight:300, color: "white", fontSize: "1.5rem", mb: "2rem"}}>
              <EmailIcon style={{fontSize: "3rem", paddingRight: "2rem", verticalAlign: 'middle', color: 'white'}}/> viro1103@gmail.com <br/>
            </Typography>
            <Typography variant="text" sx={{fontWeight:300, color: "white", fontSize: "1.5rem"}}>
              <PhoneIcon style={{fontSize: "3rem", paddingRight: "2rem", verticalAlign: 'middle', color: 'white'}}/> 647-299-9038 <br/>
            </Typography>
            <Link variant="text" sx={{fontWeight:300, color: "white", fontSize: "1.5rem",  textDecoration: "None"}} href="https://www.linkedin.com/in/virochaan-ravichandran-gowri/">
              <LinkedInIcon style={{fontSize: "3rem", paddingRight: "2rem", verticalAlign: 'middle', color: 'white'}} href="https://www.linkedin.com/in/virochaan-ravichandran-gowri/"/> LinkedIn <br/>
            </Link>
            <Link variant="text" sx={{fontWeight:300, color: "white", fontSize: "1.5rem", textDecoration: "None"}} href="https://github.com/VirochaanRG">
              <GitHubIcon style={{fontSize: "3rem", paddingRight: "2rem", verticalAlign: 'middle', color: 'white'}} href="https://github.com/VirochaanRG"/> Github <br/>
            </Link>
          </ContactHolder>
        </Grid>
        <Grid item xs={6}>
          <ContactForm>
            <ContactTitle>
              <Typography variant="h4" sx={{fontFamily: "Roboto", fontWeight:"600", color: "white"}}>Contact Form</Typography>
              <Typography variant="text" sx={{fontFamily: "Roboto", fontWeight:"300", color: "white"}}>Feel free to contact me for any oppurtunities or further information.</Typography>
            </ContactTitle>
            <ContactSection>
              <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Name" style={{padding: "1.5rem 2rem", borderRadius: "0.2rem", fontSize: "1.2rem", fontWeight: "300", fontFamily: "Roboto", marginBottom: "1rem", width: "60%"}}/>
                <input type="text" name="subject" placeholder="Subject" style={{padding: "1.5rem 2rem", borderRadius: "0.2rem", fontSize: "1.2rem", fontWeight: "300", fontFamily: "Roboto", width: "60%", marginBottom: "1rem",}} />
                <input type="email" name="email" placeholder="Email" style={{padding: "1.5rem 2rem", borderRadius: "0.2rem", fontSize: "1.2rem", fontWeight: "300", fontFamily: "Roboto", width: "60%", marginBottom: "1rem",}} />
                <textarea name="message" placeholder="Message" style={{padding: "1.5rem 2rem", borderRadius: "0.2rem", fontSize: "1.2rem", fontWeight: "300", fontFamily: "Roboto", width: "60%",}}/>
                <br/>
                <Button type="submit" value="Send" sx={{display: "inline-block",  backgroundColor: "#ffb742", color: "white", marginRight: "1.5rem", marginTop: "1.5rem", fontFamily: "Poppins", fontSize: 30, fontWeight: 500, fontFamily: "Poppins"}}>Submit</Button>
                <Button type="reset" sx={{display: "inline-block", backgroundColor: "#ffb742", color: "white", marginTop: "1.5rem", fontSize: 30, fontWeight: 500, fontFamily: "Poppins", paddingRight:"1rem", paddingLeft:"1rem"}}>Reset</Button>
              </form>
            </ContactSection>
          </ContactForm>
        </Grid>
      </Grid>
      
    </Box>
  
    
  )
}

export default Contact

const ContactHolder = styled.div`
  background-color: rgba(56, 62, 69, 0.7);
  border-radius: 2rem;
  filter: drop-shadow(10px 10px 4px rgba(0,0,0,0.4));
  margin-bottom: 1rem;
  margin-top: 4rem;
  margin-left: 5rem;
  margin-right: 3rem;
  padding-left: 10rem;
  padding-top: 2rem; 
  padding-bottom: 2rem;
  line-height: 2rem;
`

const ContactForm = styled.div`

`

const ContactTitle = styled.div`
  display: block;
  margin-left: 3rem;
  padding-left: 3rem;
  margin-bottom: 2rem;
`

const ContactSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 3rem;
  margin-left: 3rem;
`