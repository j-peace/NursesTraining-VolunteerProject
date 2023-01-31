import { Box } from '@mui/material';
import logo from '../assets/PPAHS_Logo_blue.jpg'

function LogoRound() {
    return (
        <Box className="d-flex justify-content-center align-items-center" style={{ borderRadius: '50%', height: '23vh', width: '23vh', backgroundColor: 'white' }} sx={{ boxShadow: 4 }}>
            <img
                src={logo}
                alt={'logo of PPHS'}
                style={{ height: '71%', paddingBottom: '2vh' }}
            />
        </Box>
    )
}

export default LogoRound;