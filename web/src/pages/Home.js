import { Avatar, Box, CircularProgress, Grid, Typography } from '@mui/material';
import logo from '../assets/PPAHS_Logo_blue.jpg'

function Home() {

    return (
        <Box style={{ backgroundColor: '#005681' }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="stretch"
                spacing={5}
                spacingTop={1}
                style={{ height: '100vh', width: '100vw', backgroundColor: '#005681' }}
            >

                <Grid item className="d-flex justify-content-center">
                    <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'#B3E6FF'}>
                        Sepsis Care
                    </Typography>
                </Grid>
                <Grid item className="d-flex justify-content-center">
                    <Box className="d-flex justify-content-center align-items-center" style={{ borderRadius: '50%', height: '30vh', width: '30vh', backgroundColor: 'white' }}>
                        <img
                            src={logo}
                            style={{ height: '81%', paddingBottom: '3vh' }}
                        />

                    </Box>
                </Grid>
                <Grid item className="d-flex justify-content-center" marginLeft={4} marginRight={4}>
                    <Typography variant="h5" fontFamily={'"Open Sans", sans-serif'} fontWeight={'light'} alignItems={'center'} color={'#B3E6FF'}>
                        Welcome to sepsis care guide.
                    </Typography>
                </Grid>
                <Grid item className="d-flex justify-content-center">
                    <CircularProgress />
                </Grid>
            </Grid>
        </Box>
    )

}

export default Home;