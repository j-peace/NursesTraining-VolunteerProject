import { Grid } from "@mui/material";
import { Shake } from "reshake";
import doneButton from '../assets/checked.png'

export default function ClipBoardImg(props) {
    return (
        <Grid item xs={5} sm={5}>
            <Shake active={props.activeReshake}
                h={0} v={45} r={2} dur={620} int={0.9} max={6} fixed={true} fixedStop={false} freez={false}>
                <img src={props.clipImg} style={{ width: props.clipWidth, cursor: 'pointer' }} onClick={ props.actionClip} />
                <img src={doneButton} style={{ width: '30%', marginBottom: '-70%', marginLeft: '-90%'}} hidden={props.checked} />
            </Shake>
        </Grid>
    )
}