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
            <Grid item xs={6} sx={{mt: 20}}>
                <Typography variant="h4" sx={{fontFamily: 'Poppins', fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Programming Skills/Languages</Typography>
                <Info>
                    <Typography variant="text" sx={{color: 'white', fontWeight: '300', ml: 10, fontSize: "1.3rem", display: "block", mr: 5}}>I have experience in a number of programming languages and have utilised them in various usecases. I have demonstrated this skill that I have learnt through projects that I have developed.</Typography>
                </Info>
            </Grid>
            <Grid item xs={6} sx={{my: 10, pl: 15}}>
                <Discipline>
                    <ButtonHolder>
                        <Button variant="contained" onClick={() =>{
                            setShowStack(!showStack);
                            setShowMachine(false);
                            setShowData(false);
                        }} sx={ showStack ? 
                                {
                                    py: 2, ml: 10, mr: 10, backgroundColor: '#ffb742',
                                    color: 'white', width: '100%', fontFamily: '', 
                                    borderRadius: 50, boxShadow: 6, 
                                    fontSize: "1.3rem",alignSelf: 'stretch','&:hover': {
                                        transition: "transform 0.15s ease-in-out",
                                        transform: 'scale(1.1)',
                                        backgroundColor: '#ffb742',
                                        color: 'white'
                                }} 
                                : {
                                    py: 2, ml: 10, mr: 10,fontFamily: '',  width: '100%',
                                    color: 'white', backgroundColor: '#292B2E', 
                                    borderRadius: 50,alignSelf: 'stretch', boxShadow: 6, 
                                    fontSize: "1.3rem",'&:hover': {
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
                    <ButtonHolder>
                        <Button variant="contained" onClick={() =>{
                            setShowStack(false);
                            setShowMachine(!showMachine);
                            setShowData(false);
                        }} sx={ showMachine ? 
                                    {
                                        py: 2, ml: 10, mr: 10, backgroundColor: '#ffb742',
                                        color: 'white', width: '100%', fontFamily: '', 
                                        borderRadius: 50, boxShadow: 6, 
                                        fontSize: "1.3rem",alignSelf: 'stretch','&:hover': {
                                            transition: "transform 0.15s ease-in-out",
                                            transform: 'scale(1.1)',
                                            backgroundColor: '#ffb742',
                                            color: 'white'
                                    }} 
                                    : {
                                        py: 2, ml: 10, mr: 10,fontFamily: '',  width: '100%',
                                        color: 'white', backgroundColor: '#292B2E', 
                                        borderRadius: 50,alignSelf: 'stretch', boxShadow: 6, 
                                        fontSize: "1.3rem",'&:hover': {
                                            transition: "transform 0.15s ease-in-out",
                                            transform: 'scale(1.1)',
                                            backgroundColor: '#ffb742',
                                            color: 'white'
                            }}}>Machine Learning</Button>
                    </ButtonHolder>
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
                    <ButtonHolder>
                        <Button variant="contained" onClick={() =>{
                            setShowStack(false);
                            setShowMachine(false);
                            setShowData(!showData);
                        }} sx={ showData ? 
                                    {
                                        py: 2, ml: 10, mr: 10, backgroundColor: '#ffb742',
                                        color: 'white', width: '100%', fontFamily: '', 
                                        borderRadius: 50, boxShadow: 6, 
                                        fontSize: "1.3rem",alignSelf: 'stretch','&:hover': {
                                            transition: "transform 0.15s ease-in-out",
                                            transform: 'scale(1.1)',
                                            backgroundColor: '#ffb742',
                                            color: 'white'
                                    }} 
                                    : {
                                        py: 2, ml: 10, mr: 10,fontFamily: '',  width: '100%',
                                        color: 'white', backgroundColor: '#292B2E', 
                                        borderRadius: 50,alignSelf: 'stretch', boxShadow: 6, 
                                        fontSize: "1.3rem",'&:hover': {
                                            transition: "transform 0.15s ease-in-out",
                                            transform: 'scale(1.1)',
                                            backgroundColor: '#ffb742',
                                            color: 'white'
                            }}}>Data Analytics and Cloud Computing</Button>
                    </ButtonHolder>
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
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    margin-right: 1rem;
    justify-content: center;
`

const Discipline = styled.div`
    margin-top: 1rem;
`

const ButtonHolder =styled.div`
    display: flex;
    flex: 1;
    margin-right: 1rem;
    margin-bottom: 1rem;
    width: 100%;
`

const Info = styled.div`
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 3rem;
`
