import { Alert, Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Shake } from 'reshake'
import mrBarnes from '../assets/Barners.png'
import bag from '../assets/briefcase.png'
import clip1 from '../assets/list.png'
import clip2 from '../assets/medical-checkup.png'
import clip3 from '../assets/medical-record.png'
import clip4 from '../assets/menu.png'
import AnimationTest from "../components/AnimationTest";

function Patient() {

    const [showAlert, setShowAlert] = useState(true);
    const [showItems, setShowItems] = useState(false);
    const [details, setDetails] = useState(false);


    return (
        <Box >
            <Box style={{ marginTop: '100px', backgroundColor: '#C2EBFF' }} height={'120vh'}>
                <Alert variant="outlined" severity="error" hidden={showAlert}
                    action={
                        <Button color="inherit" size="small" onClick={() => setShowAlert(true)}>
                            UNDO
                        </Button>
                    }>
                    Before to get started, check if there are something in your bag that can help!
                </Alert>
                <Grid container justifyContent="space-around" alignItems="center" padding={3} spacing={3} >
                    <Grid item id="patient"
                        xs={10} sm={8} md={6} lg={5} xl={5}>
                        {/* xs, sm, md, lg, and xl. */}
                        <img
                            src={mrBarnes} style={{ width: '100%', borderRadius: 20, borderColor: '#f4ac4c', borderStyle: 'solid' }} />
                        <Button variant="contained" disableElevation style={{ height: '2.8rem', marginTop: '-8rem', backgroundColor: '#005681' }} onClick={() => setShowAlert(false)} >
                            Start appointment
                        </Button>
                        {/* <AnimationTest /> */}
                    </Grid>
                    <Grid item id="medicalKit"
                        xs={8} sm={6} md={4} lg={4} xl={4}>
                        {!showItems ?
                            <Shake
                                h={6}
                                v={4}
                                r={0}
                                dur={60}
                                int={0.5}
                                max={34}
                                fixed={true}
                                fixedStop={true}
                                freez={true}>
                                <img src={bag} style={{ width: '100%', animationDuration: '3s', animationName: 'slidein' }} onClick={() => setShowItems(true)} />
                            </Shake>
                            : < Box backgroundColor={'#943c0c'} borderRadius={5} onClick={() => setShowItems(false)} >
                                <Grid
                                    sx={{ mt: 2 }}
                                    container
                                    spacing={3}
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    style={{ height: '50vh' }} >
                                    <Grid item xs={6} >
                                        <img src={clip1} style={{ height: '20vh' }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={clip2} style={{ height: '20vh' }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={clip3} style={{ height: '20vh' }} />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <img src={clip4} style={{ height: '20vh' }} />
                                    </Grid>
                                </Grid>
                            </Box>
                        }
                    </Grid>
                </Grid>
            </Box>
            <Paper id="navBar"
                elevation={3} sx={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#005681', height: '100px' }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    style={{ width: '100vw' }}
                >
                    <Grid item className="d-flex justify-content-center pt-2">
                        <Typography variant="h5" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'#C2EBFF'} >
                            Patient
                        </Typography>
                    </Grid>
                    <Grid item className="d-flex justify-content-center pt-2">
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} color={'#C2EBFF'} >
                            Mr. Barners Jhonson
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box >
    )
}

export default Patient;