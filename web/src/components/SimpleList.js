import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, height } from "@mui/system";
import SimpleListItem from "./SimpleListitem";
import Grid from '@mui/material/Grid'


export default function SimpleList() {
    return (
        <Grid item xs={12} sm={10} md={12} className="d-flex justify-content-space-around" direction={'column'} alignItems={'center'}>
            <List sx={{ width: '85%' }}>
                {/* <Link to="/Patient" style={{ textDecoration: "none" }}>
                            </Link> */}
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <SimpleListItem />
                    </Grid>
                </Grid>
            </List>
        </Grid>
    );
}