import React, { useEffect, useCallback, useRef, useState } from 'react';
import { Grid, Card, CardContent, Paper, Button } from '@mui/material/';

function Timer({timers, setTimers}) {
    const [timer1, setTimer1] = useState(0);
    const [timer2, setTimer2] = useState(0);

    const Count1 = new Promise((resolve) => {
        setTimeout(() => {setTimer1(timer1 + 1); resolve()}, 5000);
     });
 
    const Count2 = new Promise((resolve) => {
        setTimeout(() => {setTimer2(timer2 + 1); resolve()}, 5000);
    })

    useEffect(() => {
            Promise.all([Count1, Count2]).then(() => {
                console.log("Executado");
           });
    },[]);
    
    return (        
        <Grid container pb={2}>
                <Grid item lg={3} md={3} sm={4} ml={2}>     
                    <Paper elevation={3}>
                        <Card 
                            fullwidth
                            sx={{margin: "10px"}}
                        >
                            <CardContent>
                                <h1 style={{textAlign: 'center'}}>{timer1}</h1>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
                <Grid item lg={3} md={3} sm={4} ml={2}>     
                    <Paper elevation={3}>
                        <Card 
                            fullwidth
                            sx={{margin: "10px"}}
                        >
                            <CardContent>
                                <h1 style={{textAlign: 'center'}}>{timer2}</h1>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
        </Grid>     
    )
}
export default Timer;