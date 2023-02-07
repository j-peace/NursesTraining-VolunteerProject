import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function ClipboardDetails(props) {
    return (
        <Box backgroundColor={'#f4ac4c'} sx={{ borderRadius: 7, height: '37vh', p: 2, display: 'grid', justifyContent: 'space-around', height: '30vw', minHeight: '35vh' }} >
            {props.recordType === 'personal' ?
                <>
                    <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pt: 3 }} >
                        Personal Information
                    </Typography>
                    <Grid style={{ display: 'flex' }}>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pr: 1 }} >
                            Name:
                        </Typography>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'}>
                            Barners Jhonson
                        </Typography>
                    </Grid>
                    <Grid style={{ display: 'flex' }}>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pr: 1 }} >
                            Age:
                        </Typography>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'}>
                            70
                        </Typography>
                    </Grid>
                    <Grid style={{ display: 'flex' }}>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pr: 1 }} >
                            Gender:
                        </Typography>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'}>
                            Male
                        </Typography>
                    </Grid>
                    <Grid style={{ display: 'flex' }}>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pr: 1 }} >
                            Ethnicities:
                        </Typography>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'}>
                            African American
                        </Typography>
                    </Grid>
                </>
                : []}
            {props.recordType === 'diagnosis' ?
                <>
                    <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pt: 3 }} >
                        Diagnosis
                    </Typography>
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'}>
                        Healing peripheral vascular ulcer on his right foot.
                    </Typography>
                    <Typography variant="body2" fontFamily={'"Open Sans", sans-serif'}>
                        Evidence of infection, clotting problems, abnormal liver or kidney function, impaired oxygen availability, electrolyte imbalances.
                    </Typography>
                    <Grid style={{ display: 'flex' }}>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} color='red' fontWeight={'bold'}sx={{ pr: 1 }} >
                        Sepsis: 
                        </Typography>
                    <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} color='red'>
                        Reagent
                    </Typography>
                    </Grid>
                </>
                : []}
            {props.recordType === 'prescription' ?
                <>
                    <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pt: 3 }} >
                        Doctor's prescription
                    </Typography>
                    <Grid style={{ display: 'flex' }}>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pr: 1 }} >
                            Antibiotics:
                        </Typography>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'}>
                            Follow the medical recipe.
                        </Typography>
                    </Grid>
                    <Grid style={{ display: 'flex' }}>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pr: 1 }} >
                            Bandages:
                        </Typography>
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'}>
                            Wound healing peripheral vascular ulcer on right foot: Wet-to-dry dressings two times a day.
                        </Typography>
                    </Grid>
                </>
                : []}
                {props.recordType === 'summary' ?
                    <>
                        <Typography variant="h4" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pt: 3 }} >
                        Discharge summary
                        </Typography>
                        <Grid style={{ display: 'flex' }}>
                            <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pr: 1 }} >
                                Description:
                            </Typography>
                            <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'}>
                            Mr. Banks must needs continue to care for his right foot at home twice a day with wet-dry dressings.
                            </Typography>
                        </Grid>
                        <Grid style={{ display: 'flex' }}>
                            <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} sx={{ pr: 1 }} >
                                Status:
                            </Typography>
                            <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'green'}>
                            Discharged
                            </Typography>
                        </Grid>
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