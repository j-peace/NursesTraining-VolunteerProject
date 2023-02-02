import List from "@mui/material/List";
import SimpleListItem from "./SimpleListitem";
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom';

export default function SimpleList() {

    return (
        <Grid item xs={12} sm={10} md={12} className="d-flex justify-content-space-around" direction={'column'} alignItems={'center'}>
            <List sx={{ width: '85%', mt: 2 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={4} >
                        <Link to="/Patient" style={{ textDecoration: "none" }}>
                            <SimpleListItem patientName={'Mr. Barnes Jhonson'} />
                        </Link>
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