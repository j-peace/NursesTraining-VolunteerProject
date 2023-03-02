import { useState } from "react";
import Question from "./Question";
import Grid from '@mui/material/Grid'
import { Box } from "@mui/system";
import { Alert, Button } from "@mui/material";

export default function Questions(props) {

    const [showAlert, setShowAlert] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState("error")
    const [wrongBorder, setWrongBorder] = useState('white')
    const [correctBorder, setCorrectBorder] = useState('white')

    function answer(){
        setShowAlert(true)
        setWrongBorder('red')
        setCorrectBorder('green')
    }

    return (
        <Box className="d-flex justify-content-space-around" direction={'column'} alignItems={'center'} hidden={props.hidden}>
            <Grid container spacing={3}>
                <Grid item>
                    <Alert severity={correctAnswer} hidden={!showAlert}>
                    "All the answers are helpful, but the most appropriate answer would be <strong>(C)</strong>. Sending the patient home with the correct supplies and resources helps to prevent the recurrence of infections and ultimately developing sepsis."
                    </Alert>
                </Grid>
                <Grid item onClick={() => {setCorrectAnswer("error"); answer()}} >
                    <Question hidden={props.hidden} border={wrongBorder} alternative={'A'} text={"Mr. Barnes, I am sorry for your loss. There are instructions in the pamphlet related to wound care. My nurse will make some phone calls to home health to see if they can help with the dressing changes."} />
                </Grid>
                <Grid item onClick={() => {setCorrectAnswer("error"); answer()}} >
                    <Question hidden={props.hidden} border={wrongBorder} alternative={'B'} text={"Mr. Barnes, I am sorry for your loss. What resources do you have to help? Is there someone who can help with the dressing changes?"} />
                </Grid>
                <Grid item onClick={() => {setCorrectAnswer("success"); answer()}} >
                    <Question hidden={props.hidden} border={correctBorder} alternative={'C'} text={"Mr. Barnes, I am sorry for your loss. My nurse is going to send you home with two weeks' worth of dressings. Before you leave, let's identify who can help you with the dressing changes. They can call our office if they have any problems. We will call to check on you in a few days and see how you are doing."} />
                </Grid>
                <Grid item onClick={() => {setCorrectAnswer("error"); answer()}} >
                    <Question hidden={props.hidden} border={wrongBorder} alternative={'D'} text={"Mr. Barnes, I am sorry for your loss. We can contact the senior center and see if there are any resources to help with your meals and dressing changes. We will be calling to check on you in a couple of days. Here is the office number to call if you need anything."} />
                </Grid>
            </Grid>
        </Box>
    );
}




