import { Box, Grid, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography, Button } from '@mui/material';
import React, {useState} from 'react';
import styled from 'styled-components/';
import Python from '../images/python.png'
import Numpy from '../images/numpy.png'
import SciKit from '../images/scikit.png'
import Pandas from '../images/pandas.png'
import Html from '../images/html.png'
import Css from '../images/css.png'
import Js from '../images/js.png'
import MongoDb from '../images/mongodb.png'
import Mysql from '../images/mysql.png'
import Node from '../images/node.png'
import Express from '../images/express.png'
import Reactimg from '../images/react.png'
import TensorFlow from '../images/tensorflow.png'
import Rimg from '../images/r.png'
import Aws from '../images/aws.png'
import Spacy from '../images/spacy.png'
import Matlab from '../images/matlab.png'

const imageStyle = {width: "4rem", height: "4rem", alignItems: "center"}
const imageStyleRect = {width: "4rem", height: "2rem", alignItems: "center"}
// const

const Languages = () => {
    const [showStack, setShowStack] = useState(true)
    const [showMachine, setShowMachine] = useState(false)
    const [showData, setShowData] = useState(false)
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={6} sx={{my: 5}}>
                <Typography variant="h4" sx={{fontFamily: 'Poppins', fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Programming Skills/Languages</Typography>
                <Typography variant="text"></Typography>
            </Grid>
            <Grid item xs={6} sx={{my: 10, pl: 15}}>
                <Discipline>
                    <ButtonHolder>
                        <Button variant="contained" onClick={() =>{
                            setShowStack(!showStack);
                            setShowMachine(false);
                            setShowData(false);
                        }} sx={ showStack ? {transform: 'scale(1.1)',
                                backgroundColor: '#ffb742',
                                color: 'white'} :{fontFamily: '', color: 'white', backgroundColor: '#292B2E', borderRadius: 50, boxShadow: 6, fontSize: "1.3rem", display: "flex", justifyContent: 'center', '&:hover': {
                                transition: "transform 0.15s ease-in-out",
                                transform: 'scale(1.1)',
                                backgroundColor: '#ffb742',
                                color: 'white'
                        }}}>Full Stack Development</Button>
                    </ButtonHolder>
                    
                    {showStack && 
                        <ImageHolder> 
                            <Image> <img src={Html} style={imageStyle}/></Image>
                            <Image><img src={Css} style={imageStyle}/></Image>
                            <Image><img src={Js} style={imageStyle}/></Image>
                            <Image><img src={Express} style={imageStyle}/></Image>
                            <Image><img src={Reactimg} style={imageStyle}/></Image>
                            <Image><img src={MongoDb} style={imageStyle}/></Image>
                            <Image><img src={Mysql} style={imageStyle}/></Image>
                            <Image><img src={Node} style={imageStyle}/></Image>
                        </ImageHolder>
                    }
                </Discipline>
                <Discipline>
                    <Button variant="contained" onClick={() =>{
                        setShowStack(false);
                        setShowMachine(!showMachine);
                        setShowData(false);
                    }} sx={{fontFamily: '', color: 'white'}}>Machine Learning</Button>
                    {showMachine && 
                        <ImageHolder> 
                            <Image> <img src={Python} style={imageStyle}/></Image>
                            <Image><img src={Numpy} style={imageStyle}/></Image>
                            <Image><img src={SciKit} style={imageStyleRect}/></Image>
                            <Image><img src={Pandas} style={imageStyle}/></Image>
                            <Image><img src={TensorFlow} style={imageStyle}/></Image>
                        </ImageHolder>
                    }
                </Discipline>
                <Discipline>
                    <Button variant="contained" onClick={() =>{
                        setShowStack(false);
                        setShowMachine(false);
                        setShowData(!showData);
                    }} sx={{fontFamily: '', color: 'white'}}>Data Analytics and Cloud Computing</Button>
                    {showData &&
                        <ImageHolder> 
                            <Image> <img src={Python} style={imageStyle}/></Image>
                            <Image><img src={Rimg} style={imageStyle}/></Image>
                            <Image><img src={Aws} style={imageStyle}/></Image>
                            <Image><img src={Matlab} style={imageStyle}/></Image>
                            <Image><img src={Spacy} style={imageStyleRect}/></Image>
                        </ImageHolder>
                    }
                </Discipline>
            </Grid>
        </Grid>
    </Box>
  ) 
}

export default Languages

const Image = styled.div`
    width: 5rem;
    height: 5rem;
    background-color: #383E45;
    border-radius: 15px;
    position: relative;
    top: 0;
    transition: top ease 0.5s;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 0.5rem;
    &:hover {
        top: -10px;
        
    }
    
    img {
        padding: 0.5rem;
    }
    p {
        align-self: flex-end;
        display: inline-block;
    }
`

const ImageHolder =styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 5rem);
    grid-gap: 2rem;
    margin-top: 1rem;
    margin-right: 1rem;
`

const Discipline = styled.div`
    margin-top: 1rem;
`

const ButtonHolder =styled.div`
    display: flex;
    justify-content: center;
    margin-right: 1rem;
    margin-bottom: 1rem;
`
