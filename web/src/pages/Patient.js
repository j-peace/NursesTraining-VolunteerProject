import { Alert, Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Shake } from 'reshake'
import mrBarnes from '../assets/Barners.png'
import bag from '../assets/bag2.png'
import clip1 from '../assets/medical-record.png'
import clip2 from '../assets/medical-checkup.png'
import clip3 from '../assets/list.png'
import clip4 from '../assets/health-checkup.png'
import ClipboardDetails from "../components/ClipboardDetails";
import ClipBoardImg from "../components/ClipBoardImg";
import TypeWriter from "../components/TypeWriter";

function Patient() {

    const alertErrorMsg = "Before to get started, check if there are something in your bag that can help!"
    const alertSuccesMsg = "You are able to start, please click on start appoiment!"
    const [hiddenStartButton, setHiddenStartButton] = useState(false);

    const [showAlert, setShowAlert] = useState(false);
    const [showAlertShake, setShowAlertShake] = useState(false);
    const [alerMsg, setAlertMsg] = useState(alertErrorMsg);
    const [alertType, setAlertType] = useState("error");

    const [showBag, setShowBag] = useState(true);
    const [showItems, setShowItems] = useState(false);
    const [showRecords, setShowRecords] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [showQuestions, setShowQuestions] = useState(false);

    const [recordType, setRecordType] = useState('');
    const [mainBorder, setMainBorder] = useState('#dadbdd');

    const [checkedClip1, setCheckedClip1] = useState(true);
    const [checkedClip2, setCheckedClip2] = useState(true);
    const [checkedClip3, setCheckedClip3] = useState(true);
    const [checkedClip4, setCheckedClip4] = useState(true);



    function timeCloseErrorMsg() {
        setTimeout(() => { closeErrorMsg() }, 4000);
    }

    function closeErrorMsg() {
        setShowAlert(false);
        setShowAlertShake(false);
        if (alertType === "error") setMainBorder('#dadbdd')
    }

    function authorizeStart() {
        if (!checkedClip1 && !checkedClip2 && !checkedClip3 && !checkedClip4) {
            setAlertType("success")
            setAlertMsg(alertSuccesMsg)
            setShowAlert(true);
            setTimeout(() => { setShowAlert(false) }, 5000);
        }
    }

    function startAppoiment() {
        if (alertType === "success") {
            setMainBorder('#005681');
            setHiddenStartButton(true);
            setShowRecords(false);
            setShowAlert(false);
            setShowQuestions(true);
        }
        else {
            setShowAlert(true);
            setMainBorder('red');
            setShowAlertShake(true);
            timeCloseErrorMsg();
        }
    }

    return (
        <Box >
            <Box style={{ marginTop: '100px', backgroundColor: '#C2EBFF' }} height={'120vh'}>
                <Alert variant="outlined" severity={alertType} hidden={!showAlert}
                    action={
                        <Button color="inherit" size="small" onClick={() => { setShowAlert(false); closeErrorMsg() }}>
                            UNDO
                        </Button>
                    }>
                    {alerMsg}
                </Alert>
                <Grid container justifyContent="space-around" alignItems="center" padding={3} spacing={3} >
                    <Grid item id="patient"
                        xs={10} sm={8} md={6} lg={5} xl={5}>
                        <img
                            src={mrBarnes} style={{ width: '100%', borderRadius: 20, borderColor: mainBorder, borderStyle: 'solid' }} />
                        <Button variant="contained" disableElevation hidden={hiddenStartButton} style={{ height: '3.2rem', marginTop: '-8rem', backgroundColor: '#005681', boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)'}} onClick={() => startAppoiment()} >
                            Start appointment
                        </Button>
                    </Grid>
                    {showBag ?
                        <Grid item id="medicalKit"
                            xs={8} sm={6} md={4} lg={4} xl={4}>
                            <Shake active={showAlert}
                                h={0} v={45} r={2} dur={620} int={0.9} max={6} fixed={true} fixedStop={false} freez={false}>
                                <img src={bag} style={{ width: '100%', cursor: "pointer" }} onClick={() => { setShowBag(false); setShowItems(true); closeErrorMsg() }} />
                            </Shake>
                        </Grid> : <></>}
                    {showItems ?
                        <Grid item id="medicalKit"
                            xs={11} sm={10} md={7} lg={5} xl={5} sx={{ margin: 1 }} >
                            {showRecords ?
                                    <Grid id="openBag" container borderRadius={5} mt={3} pb={4} backgroundColor={'#4bd49c'} style={{justifyContent: "center", alignItems: "center", borderColor: '#049971', borderStyle: 'solid'}} >
                                        <ClipBoardImg clipTitle={'Personal'} activeReshake={showAlertShake} checked={checkedClip1} clipImg={clip1} actionClip={() => { setShowDetails(true); setShowRecords(false); setRecordType('personal'); setCheckedClip1(false) }} />
                                        <ClipBoardImg clipTitle={'Diagnosis'} activeReshake={showAlertShake} checked={checkedClip2} clipImg={clip2} actionClip={() => { setShowDetails(true); setShowRecords(false); setRecordType('diagnosis'); setCheckedClip2(false) }} />
                                        <ClipBoardImg clipTitle={"Prescription"} activeReshake={showAlertShake} checked={checkedClip3} clipImg={clip3} actionClip={() => { setShowDetails(true); setShowRecords(false); setRecordType('prescription'); setCheckedClip3(false) }} />
                                        <ClipBoardImg clipTitle={'Summary'} activeReshake={showAlertShake} checked={checkedClip4} clipImg={clip4} actionClip={() => { setShowDetails(true); setShowRecords(false); setRecordType('summary'); setCheckedClip4(false) }} />
                                    </Grid>
                                : []}
                            {showDetails ?
                                <ClipboardDetails action={() => { setShowDetails(false); setShowRecords(true); authorizeStart() }} recordType={recordType} />
                                : []}
                            {showQuestions ?
                                    <Grid container spacing={3} justifyContent="center"  backgroundColor={'#dadbdd'}  borderRadius={5}  alignItems="center" mt={3} pb={5} style={{ width: '100%', borderColor: '#005681', borderStyle: 'solid' }}>
                                        <TypeWriter typingSpeed={40} />
                                    </Grid>
                                : []}
                        </Grid> : []
                    }
                </Grid>
            </Box>
            <Paper id="navBar"
                elevation={3} sx={{ position: 'fixed', top: 0, left: 0, right: 0, backgroundColor: '#005681', height: '100px' }}>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="stretch"
                    style={{ width: '100vw' }}
                >
                    <Grid item className="d-flex justify-content-center pt-2">
                        <Typography variant="h5" fontFamily={'"Open Sans", sans-serif'} fontWeight={'bold'} color={'#C2EBFF'} >
                            Patient
                        </Typography>
                    </Grid>
                    <Grid item className="d-flex justify-content-center pt-2">
                        <Typography variant="h6" fontFamily={'"Open Sans", sans-serif'} color={'#C2EBFF'} >
                            Mr. Barners Jhonson
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Box >
    )
}

export default Patient;