import React from 'react'
import {Typography, Card, CardActionArea, CardContent, CardActions, CardMedia, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectInfo(Description) {
  return (
    <Card sx={{
        maxWidth: 500,
        borderRadius: "2rem",
        backgroundColor: "black",
        boxShadow: 10
      }}>
        <CardActionArea>
            <CardMedia component="img" height="300" image={Description.image} alt="" />
            <CardContent style={{backgroundColor: "#383E45"}}>
                <Typography gutterBottom variant="h5" sx={{fontFamily: "Poppins", fontWeight: '300', color: 'white'}}>
                    {Description.title}
                </Typography>
                <Typography variant="body2" color="white">
                    {Description.desc}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions style={{backgroundColor: "#383E45"}}>
            <Button variant="text" href={Description.GitLink} sx={{color: "white"}}>
                <GitHubIcon/>
            </Button>
        </CardActions>
    </Card>
  )
}

export default ProjectInfo