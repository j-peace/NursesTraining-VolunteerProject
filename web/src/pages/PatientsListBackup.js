import { Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import SimpleList from "../components/SimpleList";

function PatientsList() {
    return (
        <>
            <Paper className="" style={{ backgroundColor: '#BDD5FC', overflow: 'hidden', position: 'fixed', top: 0 }} elevation={3}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    style={{ width: '100vw' }}
                >
                    <Grid item className="d-flex justify-content-center pt-2">
                        <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'#005681'} >
                            Patients list
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid container className='d-flex justify-content-center pt-2 pb-2' >
                            <Grid item xs={12} sm={10} md={8} lg={6} className="d-flex justify-content-center" >
                                <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" size="small" sx={{ width: '85%', borderRadius: 5 }} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                        <Grid container className='d-flex justify-content-center pt-4' >
                            <Grid item xs={12} sm={10} md={8} lg={6} className="d-flex justify-content-space-around" direction={'column'} alignItems={'center'}>
                                {/* <Link to="/Patient" style={{ textDecoration: "none" }}>
                            </Link> */}
                                <Box sx={{ backgroundColor: '#078F73', width: '85%', height: '8vh', borderRadius: 1 }}>
                                    <Typography variant="h5" fontFamily={'"Open Sans", sans-serif'} className="text-center" fontWeight={'light'} alignItems={'center'} color={'#BDD5FC'}>
                                        PatientList
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

            <Box style={{ padding: '16px', marginTop: '30px', height: '50px' }}>
                <Grid container className='d-flex justify-content-center' >
                    <Grid item xs={12} sm={10} md={8} lg={6} className="d-flex justify-content-space-around" direction={'column'} alignItems={'center'}>
                        <SimpleList />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default PatientsList;