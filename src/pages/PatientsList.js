import { Alert, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import SimpleList from "../components/SimpleList";

function PatientsList() {

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        setShowAlert(true)
        setTimeout(() => { setShowAlert(false) }, 5000);
    }, []);

    return (
        <Box>
            <Box style={{ marginTop: '120px', backgroundColor: '#C2EBFF' }}>
                <Alert severity="warning" hidden={!showAlert}
                    action={
                        <Button color="inherit" size="small" onClick={() => setShowAlert(false)}>
                            UNDO
                        </Button>
                    }>
                    Choose a patient to initialize the appointment!
                </Alert>
                <Grid container className='d-flex justify-content-center' >
                    <SimpleList />
                </Grid>
            </Box>
            <Paper elevation={3} sx={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#005681', height: '120px' }}>
                <Grid
                    container
                    direction={"column"}
                    alignItems="stretch"
                    style={{ width: '100vw' }}
                >
                    <Grid item className="d-flex justify-content-center pt-2">
                        <Typography variant="h5" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'#C2EBFF'} >
                            Patients list
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Grid container className='d-flex justify-content-center pt-2 pb-3 pe-2' >
                            <Grid item xs={12} sm={10} md={8} lg={6} className="d-flex justify-content-center" >
                                <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" size="small" sx={{ width: '85%', borderRadius: 5 }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>

        </Box>
    )
}

export default PatientsList;