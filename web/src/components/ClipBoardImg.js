import { Grid } from "@mui/material";
import { Shake } from "reshake";

export default function ClipBoardImg(props) {
    return (
        <Grid item xs={5} sm={5}>
            <Shake active={props.activeReshake}
                h={0} v={45} r={2} dur={620} int={0.9} max={6} fixed={true} fixedStop={false} freez={false}>
                <img src={props.clipImg} style={{ width: props.clipWidth, cursor: 'pointer' }} onClick={ props.actionClip} />
            </Shake>
        </Grid>
    )
}