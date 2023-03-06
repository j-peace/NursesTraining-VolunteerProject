import { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import femaleNames from '../constants/randomFemaleNames.json'
import maleNames from '../constants/randomMaleNames.json'
import lastNames from '../constants/randomLastNames.json'
import { Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";


export default function SimpleListItem(props) {

    const [defaultName, setDefaultName] = useState('');
    const [initials, setInitials] = useState('MJ');
    const [defaultCursor, setDefaultCursor] = useState('not-allowed')


    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function firstName(gender) {
        if (gender === 1) {
            return 'Ms. ' + femaleNames.data[getRandomInt(999)]
        } else {
            return 'Mr. ' + maleNames.data[getRandomInt(999)]
        }
    }

    async function refreshName() {
        let patient = firstName(getRandomInt(2) + 1) + ' ' + lastNames.data[getRandomInt(999)]
        setDefaultName(patient)

        let nameArray = props.patientName ? props.patientName.split(' ') : patient.split(' ');
        setInitials(nameArray[1][0] + nameArray[2][0])
    }

    useEffect(() => {
        if(props.patientName) setDefaultCursor('pointer');
        refreshName();
    }, []);

    return (
        <Box style={{ backgroundColor: "white" }} sx={{boxShadow: 3, borderRadius: 2, "&:hover": {boxShadow: 6,transform: "translateY(-2px)"}}} >
            <ListItem direction="row" alignItems="center" sx={{ boxShadow: 3, borderRadius: 2, "&:hover": {boxShadow: 6,transform: "translateY(-2px)", backgroundColor: '#F5F5F5', cursor: defaultCursor}}} >
                <ListItemAvatar>
                    {props.patientName ? <Avatar alt={initials} sx={{ bgcolor: green[800] }}>{initials}</Avatar> : <Avatar alt={initials} >{initials}</Avatar>}
                </ListItemAvatar>
                {props.patientName ?
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                    >
                        <Grid item xs={12} xl={6}>
                            <ListItemText style={{ color: "black", fontWeight: "bold" }} primary={props.patientName} />
                        </Grid>
                        <Grid item xs={12} xl={6}>
                            <Typography sx={{ color: "green", fontWeight: "bold" }} variant="body1" color="initial">ready to start</Typography>
                        </Grid>
                    </Grid>
                    : <Grid
                        container
                        direction="row"
                        alignItems="center"
                    >
                        <Grid item xs={12} xl={6}>
                            <ListItemText primary={defaultName} />
                        </Grid>
                        <Grid item xs={12} xl={6}>
                            <ListItemText secondary={'unavailable'} />
                        </Grid>
                    </Grid>}
            </ListItem>
        </Box>
    );
}