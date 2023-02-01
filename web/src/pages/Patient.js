import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import LogoRound from "../components/LogoRound";

function Patient(){
    return(
        <Box className="" style={{ backgroundColor: '#BDD5FC', height: '100vh' }}>
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
                                    Patient
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
                                <Link to="/Patient" style={{ textDecoration: "none", width: '85%'}}>
                                    <Button variant="contained" disableElevation style={{ width: '100%', height: '8vh', backgroundColor: '#005681' }} >
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
    )
}
export default Patient;