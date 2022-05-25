import React from 'react'
import {Typography, Card, CardActionArea, CardContent, CardActions, CardMedia, Button } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectInfo(Image, Description) {
  return (
    <Card sx={{
        maxWidth: 500,
        borderRadius: "2rem",
        backgroundColor: "black"
      }}>
        <CardActionArea>
            <CardMedia component="img" height="300" image={Image} alt="" />
            <CardContent style={{backgroundColor: "#292B2E"}}>
                <Typography gutterBottom variant="h5" component="div">
                    {Description.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {Description.desc}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="large">
                <GitHubIcon/>
            </Button>
        </CardActions>
    </Card>
  )
}

export default ProjectInfo