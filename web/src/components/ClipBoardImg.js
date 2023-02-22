import { Button, Grid, Typography } from "@mui/material";
import { Shake } from "reshake";
import doneButton from '../assets/checked.png'

export default function ClipBoardImg(props) {
    return (
        <Grid item xs={5} sm={5} onClick={ props.actionClip} padding={1}>
            <Shake active={props.activeReshake}
                h={0} v={45} r={2} dur={620} int={0.9} max={6} fixed={true} fixedStop={false} freez={false}>
                <img id="clipIcon" src={props.clipImg} style={{ width: '70%', margin: '15%', marginBottom: '-20%', cursor: 'pointer' }}/>
                <img src={doneButton} style={{ width: '30%', marginBottom: '-70%', marginLeft: '-90%'}} hidden={props.checked} />
                <Button variant="contained" style={{width: '100%', height:'3.2rem', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',  backgroundColor: '#005681', position: "static" }}  > {props.clipTitle}</Button>
            </Shake>
        </Grid>
    )
}