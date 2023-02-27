import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import TypeWriter from "./TypeWriter";

export default function QuestionBarners() {

    const [textNumber, setTextNumber] = useState(1)

    const [type1, setType1] = useState(false)
    const [type2, setType2] = useState(true)
    const [type3, setType3] = useState(true)
    const [type4, setType4] = useState(true)
    const [type5, setType5] = useState(true)
    const [type6, setType6] = useState(true)
    const [type7, setType7] = useState(true)

    const [typeEnd1, setTypeEnd1] = useState(false)
    const [typeEnd2, setTypeEnd2] = useState(false)
    const [typeEnd3, setTypeEnd3] = useState(false)
    const [typeEnd4, setTypeEnd4] = useState(false)
    const [typeEnd5, setTypeEnd5] = useState(false)
    const [typeEnd6, setTypeEnd6] = useState(false)
    const [typeEnd7, setTypeEnd7] = useState(false)

    async function nextQuestion() {
        switch (textNumber) {
            case 1:
                setTypeEnd1(true);
                setType2(false);
                setTextNumber(textNumber + 1);
                break;
            case 2:
                setTypeEnd2(true);
                setType3(false);
                setTextNumber(textNumber + 1);
                break;
            case 3:
                setTypeEnd3(true);
                setType4(false);
                setTextNumber(textNumber + 1);
                break;
            case 4:
                setTypeEnd4(true);
                setType5(false);
                setTextNumber(textNumber + 1);
                break;
            case 5:
                setTypeEnd5(true);
                setType6(false);
                setTextNumber(textNumber + 1);
                break;
            case 6:
                setTypeEnd6(true);
                setType7(false);
                setTextNumber(textNumber + 1);
                break;
        }
    }

    return (
        <Box container justifyContent="center" backgroundColor={'#dadbdd'} borderRadius={5} alignItems="center" p={1} mt={3} pb={5} style={{ width: '100%', borderColor: '#005681', borderStyle: 'solid' }}>
            <TypeWriter end={typeEnd1} hidden={type1} boldText={'You:'} text={'Hi Mr. Barners!'} />
            <TypeWriter end={typeEnd2} hidden={type2} boldText={'Mr. Barnes:'} text={'Hi!'} />
            <TypeWriter end={typeEnd3} hidden={type3} boldText={'You:'} text={'According to your medical record, you are discharged and should follow these wound care instructions with wet-to-dry dressings two times a day.'} />
            <TypeWriter end={typeEnd4} hidden={type4} boldText={'Mr. Barners'} text={'After reading the instructions starts to cry 😭.'} />
            <TypeWriter end={typeEnd5} hidden={type5} boldText={'You:'} text={'Mr. Barnes, are you okay?'} />
            <TypeWriter end={typeEnd6} hidden={type6} boldText={'Mr. Barnes:'} text={'My wife passed away three months ago. I do not drive. I have no way of changing bandages or getting supplies.'} />
            <TypeWriter end={typeEnd7} hidden={type7} boldText={'Choose between the following options what is the best way to respond to Mr. Barners...'} text={''} />
            <Button onClick={() => nextQuestion(textNumber)}
                variant="contained" disableElevation style={{ height: '3.5vw', minHeight: '45px', backgroundColor: '#005681', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)' }} >
                NEXT
            </Button>
        </Box>
    )
}