import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <div>
        <Typography variant="h3">
            Hi, I am
            <span> Virochaan Ravichandran Gowri</span>
            <span className="">👋</span>
        </Typography>
    </div>
    
  )
}

export default Hero

const Name = styled