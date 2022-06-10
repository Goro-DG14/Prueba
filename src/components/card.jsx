import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


import image1 from '../assets/2015-2.jpg'
import image2 from '../assets/2017-1.jpg'
import image3 from '../assets/2019-1.jpg'
import image4 from '../assets/2019-2.jpg'
import image5 from '../assets/2019-3.jpg'
import image6 from '../assets/2019-4.jpg'
import image7 from '../assets/2019-5.jpg'
import image8 from '../assets/2019-6.jpg'
import image9 from '../assets/2019-7.jpg'
import image10 from '../assets/2020-1.jpg'
import image11 from '../assets/2021-1.jpg'
import image12 from '../assets/2021-2.jpg'
import image13 from '../assets/2021-3.jpg'


const datos = [
    { 
        id: 0,
        año: 2015,
        url: image1
     },
     { 
        id: 1,
        año: 2017,
        url: image2
     }, 
     { 
        id: 2,
        año: 2019,
        url: image3
     }, 
     { 
        id: 3,
        año: 2019,
        url: image4
     }, 
     { 
        id: 4,
        año: 2019,
        url: image5
     },
      { 
        id: 5,
        año: 2019,
        url: image6
     }, 
     { 
        id: 6,
        año: 2019,
        url: image7
     }, 
     { 
        id: 7,
        año: 2019,
        url: image8
     }, 
     { 
        id: 8,
        año: 2019,
        url: image9
     }, 
     { 
        id: 9,
        año: 2020,
        url: image10
     },
      { 
        id: 10,
        año: 2021,
        url: image11
     }, 
     { 
        id: 11,
        año: 2021,
        url: image12
     },
      { 
        id: 12,
        año: 2021,
        url: image13
     }, 
    
]


export default function MediaCard() {


    const [valor,setValor] = useState (datos[0])
    console.log(valor, "Soy valor");

    const anterior = () => {
        
        if (valor.id !== 0 ) {
            setValor (datos[valor.id-1])
        }
        else{
            alert("no se puede ir mas atras")
        }
    }

    const siguiente = () => {


        if (valor.id !== 12 ) {
            setValor (datos[valor.id+1])
        }
        else{
            alert("no se puede ir mas adewlante")
        }
    }


    return (
        <Grid container spacing={12}    justifyContent="center"
        >

            <Grid item xs={6} justifyContent="center">

                <Card sx={{ maxWidth: 345 , justifyContent: "center"}}>
                    <CardMedia
                        component="img"
                        height="100%"
                        image={valor.url}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
                            AÑO :  {valor.año}
                        </Typography>
                        
                    </CardContent>
                    <CardActions sx={{
                        justifyContent:"center"
                    }}>
                        <Button variant="contained" onClick={()=> anterior()} >anterior</Button>
                        <Button variant="contained" onClick={()=> siguiente()}>siguiente</Button>
                    </CardActions>
                </Card>

            </Grid>
        </Grid>

    );
}