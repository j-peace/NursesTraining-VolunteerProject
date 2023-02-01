import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";


export default function SimpleListItem() {
    return (
        <>
            <Box className="mt-2" sx={{ backgroundColor: "white", borderRadius: 2}}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText primary="Mr. Barnes" />
                </ListItem>
            </Box>
            <Divider variant="inset" component="li" />
        </>
    );
}