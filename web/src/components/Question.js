import { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Box } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";


export default function Question(props) {

    return (
        <Box style={{ backgroundColor: "white" }} sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6, transform: "translateY(-2px)" } }} >
            <ListItem direction="row" justifyContent="center" alignItems="center" sx={{ boxShadow: 3, borderRadius: 2, "&:hover": { boxShadow: 6, transform: "translateY(-2px)", backgroundColor: '#F5F5F5', cursor: 'pointer' } }} >
                <ListItemAvatar>
                    {props.patientName ? <Avatar alt={props.patientName} sx={{ bgcolor: green[800] }}>{props.patientName}</Avatar> : <Avatar alt={props.patientName} >{props.patientName}</Avatar>}
                </ListItemAvatar>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} xl={6}>
                        <ListItemText>
                            <Typography variant="body2">
                                {props.text}
                            </Typography >
                        </ListItemText>
                    </Grid>
                </Grid>
            </ListItem>
        </Box>
    );
}