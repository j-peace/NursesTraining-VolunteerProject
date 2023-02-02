import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader'
import LogoRound from '../components/LogoRound';

function Home() {

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => { setShowLoader(false) }, 2500);
    }, [])

    return (
        <>
            <Loader hidden={showLoader} />
            <Box className="" style={{ backgroundColor: '#C2EBFF', height: '100vh' }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    style={{ height: '100vh', width: '100vw' }}
                >
                    <Grid item className="d-flex justify-content-center pt-4">
                        <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'#005681'} >
                            Sepsis Care
                        </Typography>
                    </Grid>
                    <Grid item className="d-flex justify-content-center pt-4">
                        <LogoRound />
                    </Grid>
                    <Grid item >
                        <Grid container className='d-flex justify-content-center pt-4' >
                            <Grid item xs={12} sm={10} md={8} lg={6} className="d-flex justify-content-space-around" direction={'column'} alignItems={'center'}>
                                <Typography variant="h5" fontFamily={'"Open Sans", sans-serif'} className="text-center" width={'80%'} fontWeight={'light'} alignItems={'center'} color={'#005681'}>
                                    Different patient scenarios to examine your own biases and preconceptions.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container className='d-flex justify-content-center pt-4' >
                            <Grid item xs={12} sm={10} md={8} lg={6} className="d-flex justify-content-center pt-3" >
                                <TextField fullWidth id="outlined-basic" label="Type your name" variant="outlined" style={{ width: '85%' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container className='d-flex justify-content-center' >
                            <Grid item xs={12} sm={10} md={8} lg={6} className="d-flex justify-content-center pt-3" >
                                <Link to="/PatientsList" style={{ textDecoration: "none", width: '85%'}}>
                                    <Button variant="contained" disableElevation style={{ width: '100%', height: '155%', backgroundColor: '#005681' }} >
                                        Start game
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className="d-flex justify-content-center pt-2">
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} fontWeight={'ligth'} color={'#005681'} >
                            Get help
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )

}

export default Home;