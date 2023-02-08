import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ClipboardDetails(props) {
    return (
        <Box backgroundColor={'#f4ac4c'} sx={{ borderRadius: 7, height: '37vh', p: 2, display: 'grid', justifyContent: 'space-around', height: '30vw', minHeight: '45vh' }} >
            {props.recordType === 'personal' ?
                <>
                    <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'}  >
                        Personal Information
                    </Typography>
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} marginRight={1}><Box fontWeight={'bold'} display='inline'>Name:</Box>  Barners Jhonson </Typography>
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} marginRight={1}><Box fontWeight={'bold'} display='inline'>Age:</Box> 70 </Typography>
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} marginRight={1}><Box fontWeight={'bold'} display='inline'>Gender:</Box> Male </Typography>
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} marginRight={1}><Box fontWeight={'bold'} display='inline'>Ethnicities:</Box>  African American </Typography>
                </>
                : []}
            {props.recordType === 'diagnosis' ?
                <>
                    <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'}>
                        Diagnosis</Typography>
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'}>Healing peripheral vascular ulcer on his right foot.</Typography>
                    <Typography variant="body2" fontFamily={'"Open Sans", sans-serif'}>Evidence of infection, clotting problems, abnormal liver or kidney function, impaired oxygen availability, electrolyte imbalances.</Typography>
                    <Typography variant="h6" color='red' fontFamily={'"Open Sans", sans-serif'} marginRight={1}><Box fontWeight={'bold'} display='inline'>Sepsis:</Box> Reagent</Typography>
                </>
                : []}
            {props.recordType === 'prescription' ?
                <>
                    <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'}>
                        Doctor's prescription</Typography>                    
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} marginRight={1}><Box fontWeight={'bold'} display='inline'>Antibiotics:</Box> Follow the medical recipe. </Typography>
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} marginRight={1}><Box fontWeight={'bold'} display='inline'>Bandages:</Box> Wound healing peripheral vascular ulcer on right foot: Wet-to-dry dressings two times a day.</Typography>
                </>
                : []}
            {props.recordType === 'summary' ?
                <>
                    <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'}>
                        Discharge summary
                    </Typography>
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} marginRight={1}><Box fontWeight={'bold'} display='inline'>Description:</Box> Mr. Banks must needs continue to care for his right foot at home twice a day with wet-dry dressings.</Typography>
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} color={'green'} fontWeight={'bold'} marginRight={1}><Box display='inline' color={'black'}>Status:</Box> Discharged</Typography>
                </>
                : []}
            <Grid container justifyContent="center">
                <Grid item xs={8}>
                    <Button onClick={props.action}
                        variant="contained" disableElevation style={{ width: '100%', height: '2.8rem', backgroundColor: '#005681' }} >
                        Read
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}