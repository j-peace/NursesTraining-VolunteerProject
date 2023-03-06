import { Button, Grid, Typography } from "@mui/material";
import { Shake } from "reshake";
import doneButton from '../assets/checked.png'
import { useMediaQuery } from '@material-ui/core';

export default function ClipBoardImg(props) {

    const isXsScreen = useMediaQuery('(max-width:450)')

    return (
        <Grid item xs={5} sm={5} onClick={props.actionClip} padding={2}>
            <img id="clipIcon" src={props.clipImg} style={{ width: props.clipWidth, marginLeft: props.clipMargin, marginRight: props.clipMargin, marginBottom: '-20%', cursor: 'pointer' }} />
            <img src={doneButton} hidden={props.checked} style={{ width: '30%', marginLeft: '20%' }} />
            <Shake active={props.activeReshake}
                h={0} v={45} r={2} dur={620} int={0.9} max={6} fixed={true} fixedStop={false} freez={false}>
                <Button variant="contained" hidden={!props.checked} style={{ width: '100%', height: '3.5vw', minHeight: '45px', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)', backgroundColor: '#005681'}}  > <Typography variant={isXsScreen ? 'body2' : 'body2'}>{props.clipTitle}</Typography></Button>
            </Shake>
        </Grid>
    )
}