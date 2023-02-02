import { Alert, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import mrBarnes from '../assets/Barners.png'
import bag from '../assets/briefcase.png'
import clip1 from '../assets/list.png'
import clip2 from '../assets/medical-checkup.png'
import clip3 from '../assets/medical-record.png'
import clip4 from '../assets/menu.png'
import SimpleList from "../components/SimpleList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Patient() {

    const [showAlert, setShowAlert] = useState(true);
    const [showItems, setShowItems] = useState(false);
    const [details, setDetails] = useState(false);


    return (
        <Box >
            <Box style={{ marginTop: '100px', backgroundColor: '#C2EBFF' }} height={'100vh'}>
                <Alert variant="outlined" severity="error" hidden={showAlert}
                    action={
                        <Button color="inherit" size="small" onClick={() => setShowAlert(true)}>
                            UNDO
                        </Button>
                    }>
                    Before to get started, check if there are something in your bag that can help!
                </Alert>

                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img src={mrBarnes} style={{ width: '80%' }} />
                            <Button variant="contained" disableElevation style={{ height: '155%', marginTop: -100 }} onClick={() => setShowAlert(false)} >
                                Start appointment
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {!showItems ?
                            <Box>
                                <img src={bag} style={{ width: '80%' }} onClick={() => setShowItems(true)} />
                            </Box>
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
                            </Box>}
                    </Grid>
                </Grid>
            </Box>
            <Paper elevation={3} sx={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#005681', height: '100px' }}>
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
                        <Typography variant="h5" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'#C2EBFF'} >
                            Mr Barners Jhonson
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>

        </Box >
    )
}

export default Patient;